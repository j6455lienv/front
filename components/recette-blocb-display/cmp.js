/*
 * values of recetteObj
 * recetteObj.idRecette //int
 * recetteObj.recetteIngredients[idRecette] // int
 * recetteObj.recetteIngredients[idIngredient] // int
 * recetteObj.recetteIngredients[quantite] // int
 * recetteObj.recetteIngredients[].ingredients.libelle // int
 * recetteObj.nomRecette // str
 * recetteObj.tempsPreparation // int
 * recetteObj.minerauxParPortion // int
 * recetteObj.vitaminesParPortion // int
 * recetteObj.base64ImageCode // str
 *
 */

function displayRecette() {
  hideBlocb("recette-blocb-display", false);

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

function elementsDisplayRecette(recetteObj) {
  // show display bloc
  hideBlocb("recette-blocb-display", false);

  //select existing divs
  var existDivBlocTitleElt = document.getElementsByClassName("blocTitle")[0];
  var existDivBlocImgElt = document.getElementsByClassName("blocImg")[0];

  //empty existing Divs
  $(".blocTitle").html("");
  $(".blocImg").html("");

  //add New Title (name recette)
  var titleElt = document.createElement("h4");
  titleElt.innerHTML = recetteObj.nomRecette;
  existDivBlocTitleElt.appendChild(titleElt);

  //add Img of recette
  var imgElt = document.createElement("img");
  imgElt.src = recetteObj.base64ImageCode;
  imgElt.className = "img-recette";
  existDivBlocImgElt.appendChild(imgElt);

  //param new Divs with title "Ingredients" and "Instructions"
  var divBlocIngredientsElt = document.createElement("div");
  divBlocIngredientsElt.innerHTML = "<h5>Ingredients</h5>";
  existDivBlocTitleElt.appendChild(divBlocIngredientsElt);

  var divBlocInstructionsElt = document.createElement("div");
  divBlocInstructionsElt.innerHTML = "<h5>Instructions</h5>";
  existDivBlocTitleElt.appendChild(divBlocInstructionsElt);

  var divBlocBilanNutrElt = document.createElement("div");
  divBlocBilanNutrElt.innerHTML = "<h5>Bilan Nutritionnel</h5>";
  existDivBlocTitleElt.appendChild(divBlocBilanNutrElt);

  //display recette details
  //search libelle ingredient
  //console.log(recetteObj.recetteIngredients.length);
  for (var i = 0; i < recetteObj.recetteIngredients.length; i++) {
    //console.log(recetteObj.recetteIngredients[i].ingredients.libelle);
    var ingredientsElt = document.createElement("p");
    ingredientsElt.innerHTML = "&rarr; " + recetteObj.recetteIngredients[i].ingredients.libelle + ", " + recetteObj.recetteIngredients[i].quantite +
      " " + recetteObj.recetteIngredients[i].ingredients.uniteMesure;
    divBlocIngredientsElt.appendChild(ingredientsElt);
  }

  //search instructions recette
  for (var j = 0; j < recetteObj.instructions.length; j++) {
    //console.log(recetteObj.instructions[j].libelle);
    var instructElt = document.createElement("p");
    instructElt.innerHTML = "&rarr; " + recetteObj.instructions[j].libelle;
    divBlocInstructionsElt.appendChild(instructElt);
  }

  var tempsPreparation = document.createElement("p");
  var ferParPortion = document.createElement("p");
  var sodiumParPortion = document.createElement("p");
  var vitamineB12ParPortion = document.createElement("p");
  var vitamineCParPortion = document.createElement("p");
  var vitamineDParPortion = document.createElement("p");

  tempsPreparation.innerHTML = "&rarr; Temps de préparation : " + recetteObj.tempsPreparation + " minutes";
  ferParPortion.innerHTML = "&rarr; Fer par portion : " + recetteObj.ferParPortion;
  sodiumParPortion.innerHTML = "&rarr; Sodium par portion : " + recetteObj.sodiumParPortion;
  vitamineB12ParPortion.innerHTML = "&rarr; Vitamine B12 par portion : " + recetteObj.vitamineB12ParPortion;
  vitamineCParPortion.innerHTML = "&rarr; Vitamine C par portion : " + recetteObj.vitamineCParPortion;
  vitamineDParPortion.innerHTML = "&rarr; Vitamine D par portion : " + recetteObj.vitamineDParPortion;

  divBlocInstructionsElt.appendChild(tempsPreparation);
  divBlocBilanNutrElt.appendChild(ferParPortion);
  divBlocBilanNutrElt.appendChild(sodiumParPortion);
  divBlocBilanNutrElt.appendChild(vitamineB12ParPortion);
  divBlocBilanNutrElt.appendChild(vitamineCParPortion);
  divBlocBilanNutrElt.appendChild(vitamineDParPortion);
}