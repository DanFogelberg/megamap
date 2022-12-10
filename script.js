const tileTypes = ['forest', 'river', 'fire'];
const mapHeight = 100;
const mapWidth = 20;

const body = document.querySelector('body');
const footer = document.querySelector('footer');

//Starting tile = forest. For now.
initialTile = tileTypes[0];

//Create map
let map = [];
const mapSection = document.createElement('section');
mapSection.classList.add('map-section');
body.append(mapSection);
for (let i = 0; i < mapHeight; i++) {
  map[i] = []; //Make row into an array of tiles
  let row = document.createElement('row');
  row.classList.add('row');
  mapSection.append(row);

  //Fill row with tiles
  for (let j = 0; j < mapWidth; j++) {
    map[i][j] = document.createElement('div');
    map[i][j].classList.add('tile');
    map[i][j].classList.add(initialTile);
    map[i][j].addEventListener(
      'click',
      changeType.bind(null, map[i][j], false)
    );
    map[i][j].addEventListener('mouseover', getTileInfo.bind(null, map[i][j]));

    map[i][j].dataset.type = initialTile;
    map[i][j].dataset.y = i;
    map[i][j].dataset.x = j;

    row.append(map[i][j]);
  }
}

//Create UI-elements and put them in footer
//Info Tile
const infoTile = document.createElement('div');
infoTile.classList.add('info-tile');
infoTile.classList.add('tile');

footer.append(infoTile);
//Info Background
const infoBackground = document.createElement('div');
infoBackground.classList.add('info-background');
footer.append(infoBackground);
//Info text
const infoNextTile = document.createElement('p');
infoNextTile.classList.add('info-text');
infoBackground.append(infoNextTile);

const infoMousedTile = document.createElement('p');
infoMousedTile.classList.add('info-text');
infoBackground.append(infoMousedTile);

setNewTile(); //Randomize starting tile

//Recursive function. Every tick fire might spread, trees might grow etc
tick();
