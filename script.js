const tileTypes = ["forest", "river", "fire"];



const body = document.querySelector("body");
const infoBar = document.createElement("section");
infoBar.classList.add("info-bar");



const infoTile = document.createElement("div");
infoTile.classList.add("info-tile");
infoTile.classList.add("tile");
infoTile.classList.add("forest");







let arrayIndex = Math.floor(Math.random() * tileTypes.length);
let nextTile = tileTypes[arrayIndex];
initialTile = tileTypes[0];
console.log(nextTile)

//Create map
let map = [];
const mapSection = document.createElement('section')
mapSection.classList.add("map-section");
body.append(mapSection);
for(let i = 0; i < 10; i++){
  map[i] = []; //Make row into an array of tiles
  let row = document.createElement('row')
  row.classList.add("row");
  mapSection.append(row);

  //Fill row with tiles
  for(let j = 0; j < 20; j++){
    map[i][j] = document.createElement('div');
    map[i][j].classList.add("tile");
    map[i][j].classList.add(initialTile);
    map[i][j].addEventListener("click", changeType.bind(null, map[i][j]));

    map[i][j].dataset.type = initialTile;

    row.append(map[i][j]);
  }
}


body.append(infoBar);
infoBar.append(infoTile);



//Every 5 seconds all the tiles might do something.
tick();









