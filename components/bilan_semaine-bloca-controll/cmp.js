//add date picker component
$('.crud-bloca').load("components/bilan_semaine_crud/cmp.html");
$('#container-modal-div').load("components/modal/cmp.html");
//$('#container-modal-test-div').load("components/modal/modalTest/cmp.html");

//global variable for recettes page layout
var jsonObject = [];
//object pushable to display recettes selections
var displayTableBlocA = [];
//attention datas à changer pour la mise en prod
var apiUrl = "data/recettes.json";

$(document).ready(function () {
  //xhr params
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8;');
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      jsonObject = JSON.parse(this.responseText);
      var listrecette = [];
      //add json object in the list of recettes
      jsonObject.forEach(function (obj) {
        listrecette.push(obj.recette);
      });
      //autocomplete jquery ui library
      $("#bilan_recette-bloca-input").autocomplete({
        source: listrecette
      });
    }
    if (this.status != 200) {
      console.log('error: ' + (this.status ? this.statusText : 'request failed'));
    }
  };
});