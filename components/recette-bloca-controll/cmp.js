//global variables for recettes page layout
//variable globale liste de recette 
var listrecette = [];
//attention datas à changer pour la mise en prod
var apiUrl = "data/recettes.json";

//xhr params
var xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8;');
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    let response = JSON.parse(this.responseText);
    
    console.log("response_xhr: ");
    console.log(response);
    
    //add json object in the list of recettes
    response.forEach(function(obj){
      listrecette.push(obj.recette);
    });
    
    console.log("listrecette_array for source autocompletion: ");
    console.log(listrecette);
    
    //autocomplete jquery ui library
    $( "#recette-bloca-input" ).autocomplete({
      source: listrecette
    });
  }

  if (this.status != 200) {
    console.log('error: ' + (this.status ? this.statusText : 'request failed'));
  }
};