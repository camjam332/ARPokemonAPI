
var Pokedex = require('pokedex-promise-v2');

function searchPokemon(){
  var P = new Pokedex();
  var name = document.getElementById('name');
  var image = document.getElementById('sprite');
  var model = document.getElementById('model');
  var typeName = document.getElementById('type');
  var movesList = document.getElementById('moves');
  P.getPokemonByName(name.value) // with Promise
    .then(function(response) {
      movesList.innerHTML = "Moves:";
      for(let i = 0; i < response.abilities.length; i++){
        var item = document.createElement("li");
        item.innerHTML = response.abilities[i].ability.name;
        movesList.appendChild(item);
      }
      typeName.innerHTML = 'type: ' + response.types[0].type.name;
      model.href = `./models/${name.value}.usdz`;
      image.src = response.sprites.front_default;
    })
    .catch(function(error) {
      myFunction();
      console.log('There was an ERROR: ', error);
    });
}

function myFunction(){
  var para = document.createElement("p");
  var node = document.createTextNode("Pokemon not found.");
  para.appendChild(node);

  var element = document.getElementById("main");
  element.appendChild(para);
}

window.onload = function () {
  var btn = document.getElementById('btn');
  btn.onclick = searchPokemon;
};

