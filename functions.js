//Switches type of tile to new type
const changeType = (tile, newTile = false) => {
  console.log(tile);
  removeTypes(tile);
  // tile.dataset.cooldown = true; //Potenial problem if happens on tiles that haven't actually changed type
  console.log(newTile);

  //If function is called without a specific tile, gets tile from stack
  if (newTile === false) {
    tile.classList.add(nextTile);
    tile.dataset.type = nextTile;
    arrayIndex = Math.floor(Math.random() * tileTypes.length);
    nextTile = tileTypes[arrayIndex];
    removeTypes(infoTile);
    infoTile.classList.add(nextTile);
  } else {
    tile.classList.add(newTile);
    tile.dataset.type = newTile;
  }
};

//Unset tile
const removeTypes = (tile) => {
  tileTypes.forEach((tileType) => {
    tile.classList.remove(tileType);
  });
};

//Activate all tiles. Recursive.
const tick = () => {
  map.forEach((row) => {
    row.forEach((tile) => {
      console.log(tile.dataset.cooldown);
      if (tile.dataset.cooldown == 'true') {
        tile.dataset.cooldown = false;
      } else {
        activate(tile);
      }
    });
  });
  setTimeout(tick, 5000);
};

const activate = (tile) => {
  switch (tile.dataset.type) {
    case 'fire': //Fire spreads to surrounding squares. Blocked by water.
      if (Math.random() > 0.2) break; //20% chance of fire spreading

      const direction = Math.random();
      let targetTile;
      if (direction < 0.25) {
        console.log('right');
        if (parseInt(tile.dataset.x) + 1 > mapWidth - 1) break;
        targetTile =
          map[parseInt(tile.dataset.y)][1 + parseInt(tile.dataset.x)]; //Right
      } else if (direction < 0.5) {
        console.log('down');
        if (parseInt(tile.dataset.y) + 1 > mapHeight - 1) break;
        targetTile =
          map[1 + parseInt(tile.dataset.y)][parseInt(tile.dataset.x)]; //Down
      } else if (direction < 0.75) {
        console.log('left');
        if (parseInt(tile.dataset.x) - 1 < 0) break;
        targetTile =
          map[parseInt(tile.dataset.y)][parseInt(tile.dataset.x) - 1]; //Left
      } else {
        console.log('up');
        if (parseInt(tile.dataset.y) - 1 < 0) break;
        targetTile =
          map[parseInt(tile.dataset.y) - 1][parseInt(tile.dataset.x)]; //Up
      }
      spreadFire(targetTile);
      console.log(map[parseInt(tile.dataset.y)][1 + parseInt(tile.dataset.x)]);

      break;
    case 'forest':
      //console.log("Skoga");
      //Växer till större skog och ibland sprids det småskog
      break;

    case 'river':
    //console.log("Det rinner långsamt.");
    //Kanske rinner floden ibland? Oklart.
    default:
    // code block
  }
};

const spreadFire = (tile) => {
  if (tile.dataset.type != 'river') {
    changeType(tile, 'fire');
  }
};
