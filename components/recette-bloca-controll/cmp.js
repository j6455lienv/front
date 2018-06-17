//global variables for recettes page layout
var jsonObject = [];

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
      
      //console.log("response_xhr: ");
      //console.log(jsonObject);

      var listrecette = [];
      //var listrecette2 = []:
      //add json object in the list of recettes
      jsonObject.forEach(function(obj){
        listrecette.push(obj.recette);
        //listrecette2.push(
          //{
          //"id":obj.id,
          //"recette":obj.recette
          //}
        //);
      });
      
      //console.log("listrecette_array for source autocompletion: ");
      //console.log(listrecette);
      //console.log("listrecette2_array key value: ");
      //console.log(listrecette2);

      //autocomplete jquery ui library
      $( "#recette-bloca-input" ).autocomplete({
        source: listrecette
      });
    }

    if (this.status != 200) {
      console.log('error: ' + (this.status ? this.statusText : 'request failed'));
    }
  };
});
