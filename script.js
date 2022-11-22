const body = document.querySelector("body");

//Create map
let map = [];
for(let i = 0; i < 10; i++){
  map[i] = [];
  let row = document.createElement('row')
  row.classList.add("row");
  body.append(row);
  for(let j = 0; j < 20; j++){
    map[i][j] = document.createElement('tile');
    map[i][j].classList.add("tile");
    map[i][j].addEventListener("click", function (){

      map[i][j].classList.toggle("river");

    });



    row.append(map[i][j]);

  }
}



console.log(map);
console.log(body);


