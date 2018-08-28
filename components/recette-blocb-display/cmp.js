function displayRecette() {
  hideBlocb("recette-blocb-display", false);

  // console.log(JSONresponse);
  // console.log(JSONresponse.numberOfElements);
  // console.log(JSONresponse.content[0].nomRecette);

  // store values of controll bloc
  var inputRecette = document.getElementById("recette-bloca-input").value;

  // compare recette name to know id
  var idRecette = compareNomRecetteToKnowIdRecette(JSONresponse, inputRecette);

  ajaxGETgetJSON("recette/" + idRecette, function (response) {
    // console.log(JSON.parse(response));
    if (idRecette === null) {
      errorMessage(inputRecette);
    } else {
      console.log(JSON.parse(response));
      elementsDisplayRecette(JSON.parse(response));
    }
  });

  var inputNbPersoRecette = document.getElementById("recette-bloca-select").value;
  //PDF => export pdf, renvoi le code source pdf dans le reponse 
  $("#btnExportPdfRecette").on("click", function () {
    ajaxGETgetPDF("recette/" + idRecette + "/nbPersonnes/" + inputNbPersoRecette + "/pdf", function (response) {
      $("#holderRecette").html("");
      renderPDF(response, document.getElementById('holderRecette'));
    });
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
  // show display bloc
  hideBlocb("recette-blocb-display", false);

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
  var divBlocIngredientsElt = document.createElement("div");
  var ingredientsElt = document.createElement("p");
  ingredientsElt.innerHTML = "test bloc ingredient";
  divBlocIngredientsElt.appendChild(ingredientsElt);
  divBlocDetailElt.appendChild(divBlocIngredientsElt);

  // var divButtElt = document.createElement("div");
  // divButtElt.id = "btnExportPdfRecette";
  // divButtElt.innerHTML = "Générer PDF";
  // divBlocDetailElt.appendChild(divButtElt);

}