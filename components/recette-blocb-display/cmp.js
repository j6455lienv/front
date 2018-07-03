function displayRecette() {
  hideBlocb("recette-blocb-display", false);

  // console.log(JSONresponse);
  // console.log(JSONresponse.numberOfElements);
  // console.log(JSONresponse.content[0].nomRecette);

  // store values of controll bloc
  var inputRecette = document.getElementById("recette-bloca-input").value;
  var inputNbPersonnes = document.getElementById("recette-bloca-select").value;

  // console.log(toDisplay);
  var idRecette = null;

  //use helper ObjectSize to count size of jsonObject
  for (let i = 0; i < JSONresponse.numberOfElements; i++) {
    //compare the input recette with the recettes in jsonObject to find id
    if (inputRecette === JSONresponse.content[i].nomRecette) {
      idRecette = JSONresponse.content[i].idRecette;
    }
  }

  ajaxGETgetJSON("recette/" + idRecette, function (response) {
    // console.log(JSON.parse(response));
    if (idRecette === null) {
      errorMessage(inputRecette);
    } else {
      console.log(JSON.parse(response));
      elementsDisplayRecette(JSON.parse(response));
    }
  });

  
}

/*
* values of recetteObj
* recetteObj.idRecette //int
* recetteObj.recetteIngredients[idRecette] // int
* recetteObj.recetteIngredients[idIngredient] // int
* recetteObj.recetteIngredients[quantite] // int
* recetteObj.nomRecette // str
* recetteObj.tempsPreparation // int
* recetteObj.minerauxParPortion // int
* recetteObj.vitaminesParPortion // int
* recetteObj.base64ImageCode // str
*
*/
function elementsDisplayRecette(recetteObj) {
  // shox displat bloc
  hideBlocb("recette-blocb-display" ,false);

  $(".blocTitle").html("");
  var divBlocDetailElt = document.getElementsByClassName("blocTitle")[0];
  var titleElt = document.createElement("h4");
  titleElt.innerHTML = recetteObj.nomRecette;
  divBlocDetailElt.appendChild(titleElt);

  $(".blocImg").html("");
  var divBlocImgElt = document.getElementsByClassName("blocImg")[0];
  var imgElt = document.createElement("img");
  imgElt.src = recetteObj.base64ImageCode;
  imgElt.className = "img-recette";
  divBlocImgElt.appendChild(imgElt);

  $(".blocIngredients").html("");
  var divBlocIngredientsElt = document.getElementsByClassName("blocIngredients")[0];
  var ingredientsElt = document.createElement("p");
  ingredientsElt.innerHTML = "test bloc ingredient";
  divBlocIngredientsElt.appendChild(ingredientsElt);
}