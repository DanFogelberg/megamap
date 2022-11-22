//Switches type of tile to new type
const changeType = (tile) => {
  console.log(tile);
  removeTypes(tile);
  tile.classList.add(nextTile);
  tile.dataset.type = nextTile;

  arrayIndex = Math.floor(Math.random() * tileTypes.length);
  nextTile = tileTypes[arrayIndex];

  removeTypes(infoTile);
  infoTile.classList.add(nextTile);
}


//Unset tile
const removeTypes = (tile) => {
  tileTypes.forEach(tileType => {
    tile.classList.remove(tileType);
  });
}


const tick = () => {

  map.forEach(row=>{

    row.forEach(tile => {
      console.log(tile);
    })

  })



  setTimeout(tick, 5000);
}
