//Switches type of tile to new type
const changeType = (tile, newTile = false) => {
  removeTypes(tile);
  // tile.dataset.cooldown = true; //Potenial problem if happens on tiles that haven't actually changed type

  //If function is called without a specific tile, gets tile from stack
  if (newTile === false) {
    tile.classList.add(nextTile);
    tile.dataset.type = nextTile;
    setNewTile();
  } else {
    tile.classList.add(newTile);
    tile.dataset.type = newTile;
  }

  getTileInfo(tile); //Update description to match the now changed tile, as mousover won't be triggered again.
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
      activate(tile);
    });
  });
  setTimeout(tick, 5000);
};

const activate = (tile) => {
  switch (
    tile.dataset.type //Different tiles have different effects. Should probably be separate functions to make it easier to read.
  ) {
    case 'fire': //Fire spreads to surrounding squares. Blocked by water.
      if (Math.random() > 0.2) break; //20% chance of fire spreading

      const direction = Math.random();
      let targetTile;
      if (direction < 0.25) {
        //Right
        if (parseInt(tile.dataset.x) + 1 > mapWidth - 1) break;
        targetTile =
          map[parseInt(tile.dataset.y)][1 + parseInt(tile.dataset.x)];
      } else if (direction < 0.5) {
        //Down
        if (parseInt(tile.dataset.y) + 1 > mapHeight - 1) break;
        targetTile =
          map[1 + parseInt(tile.dataset.y)][parseInt(tile.dataset.x)];
      } else if (direction < 0.75) {
        //Left

        if (parseInt(tile.dataset.x) - 1 < 0) break;
        targetTile =
          map[parseInt(tile.dataset.y)][parseInt(tile.dataset.x) - 1];
      } else {
        //Up

        if (parseInt(tile.dataset.y) - 1 < 0) break;
        targetTile =
          map[parseInt(tile.dataset.y) - 1][parseInt(tile.dataset.x)];
      }
      spreadFire(targetTile);

      break;
    case 'forest':
      //Could perhaps grow into larger forests and spread. Perhaps only grows adjacent to water.
      break;

    case 'river':
      //Perhaps masses of water flow towards one another?
      break;
    default:
  }
};

const spreadFire = (tile) => {
  if (tile.dataset.type != 'river') {
    changeType(tile, 'fire');
  }
};

const setNewTile = () => {
  arrayIndex = Math.floor(Math.random() * tileTypes.length);
  nextTile = tileTypes[arrayIndex];
  removeTypes(infoTile);
  infoTile.classList.add(nextTile);

  if (tileTypes[arrayIndex] === 'fire') {
    infoNextTile.textContent = 'The fire burns hot!';
  } else if (tileTypes[arrayIndex] === 'forest') {
    infoNextTile.textContent = 'The forest is very calm.';
  } else if (tileTypes[arrayIndex] === 'river') {
    infoNextTile.textContent = 'The river dances.';
  }
};

const getTileInfo = (tile) => {
  switch (tile.dataset.type) {
    case 'forest':
      infoMousedTile.textContent = 'This forest looks real cozy.';
      break;

    case 'fire':
      infoMousedTile.textContent = 'There is a fire burning here!';
      break;
    case 'river':
      infoMousedTile.textContent = 'The water is incredibly blue.';
      break;
    default:
      console.log('No info for this type of tile?');
  }
};
