//add date picker component
$('.crud-bloca').load("components/bilan_semaine_crud/cmp.html");
$('#container-modal-create-div').load("components/modal/create-modal/cmp.html");
$('#container-modal-edit-div').load("components/modal/edit-modal/cmp.html");

//global variable for recettes page layout
var jsonObject = [];
//object pushable to display recettes slections
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

function pushRecetteInDisplayTableBlocA() {
  var newDatePicker = document.getElementById('datepickerId');
  var newRecette = document.getElementById('bilan_recette-bloca-input');

  //control values quality 
  if (newDatePicker.value === '' || newRecette.value === '') {
    /* UP_implementation d'une feature errorMessage à mutualiser 
    avec celle de error-blocb-display dans helper.js __ merci à toi */
    console.log("error message => no value or no good recette");
  } else {
    //add new object to the displayTableBlocA Array 
    displayTableBlocA.push({
      "recetteDate": newDatePicker.value,
      "recetteName": newRecette.value
    });
    console.log(displayTableBlocA);
    createTable(displayTableBlocA);
  }
}