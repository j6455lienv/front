function displayBilan() {
  hideBlocb("bilan_semaine-blocb-display", false);
  console.log('display bilan ok');
  // Envoi de l'objet FormData au serveur
  ajaxPOSTgetJSON("bilan", listDateRecette, function (response) {
    console.log("post req => value of JSON: ")
    console.log(listDateRecette);

    // Affichage dans la console en cas de succès
    console.log("Commande envoyée au serveur => reponse:");
    console.log(JSON.parse(response));
    console.log("=====================");
    console.log(JSON.parse(response).listeRecettes.length);
    console.log(JSON.parse(response).listeRecettes);
    $("#BlocBilan").html("");
    for (var i = 0; i < JSON.parse(response).listeRecettes.length; i++) {
      console.log(JSON.parse(response).listeRecettes[i]);
      console.log("=====================");
      elementsDisplayRecette(JSON.parse(response).listeRecettes[i]);
    }

    //display le nom de la recette
    var divBilan = document.getElementById("BlocBilan");
    var Bilan = document.createElement("h4");
    Bilan.innerHTML = " Bilan ";
    divBilan.appendChild(Bilan);

    //affiche de bilan taux  Fer
    var BilanTotalFer = document.getElementById("BlocBilan");
    var bilanFer = document.createElement("p");
    bilanFer.innerHTML = " Bilan Total en  Fer  est de : " + JSON.parse(response).bilanfer;
    BilanTotalFer.appendChild(bilanFer);

    //affiche de bilan taux Soduim
    var BilanTotalSoduim = document.getElementById("BlocBilan");
    var bilanSoduims = document.createElement("p");
    bilanSoduims.innerHTML = " Bilan Total en  Soduim est de : " + JSON.parse(response).bilanSodium;
    BilanTotalSoduim.appendChild(bilanSoduims);

    //affiche de bilan total VitaminesB12
    var BilanTotalVitaminesB12 = document.getElementById("BlocBilan");
    var BilanVitaminesB12 = document.createElement("p");
    BilanVitaminesB12.innerHTML = " Bilan total en Vitamines B12 est de : " + JSON.parse(response).bilanVitamineB12;
    BilanTotalVitaminesB12.appendChild(BilanVitaminesB12);

    //affiche de bilan total Vitamines C
    var BilanTotalVitaminesC = document.getElementById("BlocBilan");
    var BilanVitaminesC = document.createElement("p");
    BilanVitaminesC.innerHTML = " Bilan total en Vitamines C est de :" + JSON.parse(response).bilanVitamineC;
    BilanTotalVitaminesC.appendChild(BilanVitaminesC);


    //affiche de bilan total Vitamines D
    var BilanTotalVitaminesD = document.getElementById("BlocBilan");
    var BilanVitaminesD = document.createElement("p");
    BilanVitaminesD.innerHTML = " Bilan total en Vitamines D est de :" + JSON.parse(response).bilanVitamineD;
    BilanTotalVitaminesD.appendChild(BilanVitaminesD);


    $("#btnExportPdfBilan").on("click", function () {
      ajaxPOSTgetPDF("bilan/pdf", listDateRecette, function (response) {
        renderPDF(response, document.getElementById('holderBilanPdf'));
        // console.log(response);
        // console.log(PDFJS.PDFWorker);
      });
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

function elementsDisplayRecette(BilanRecetteObj) {
  // show display bloc
  hideBlocb("bilan_semaine-blocb-display", false);


  //display le nom de la recette
  var divBlocDetailElt = document.getElementById("BlocBilan");
  var titleElt = document.createElement("h4");
  titleElt.innerHTML = BilanRecetteObj.nomRecette;
  divBlocDetailElt.appendChild(titleElt);

  // Display Ingredient
  /* var divBlocIngredientsElt = document.getElementById("BlocBilan");
    var ingredientsElt = document.createElement("tr");
    ingredientsElt.innerHTML =" Ingredient: "+BilanRecetteObj.recetteIngredients ;
    divBlocIngredientsElt.appendChild(ingredientsElt);*/



  // Display Fer;
  var divBlocFer = document.getElementById("BlocBilan");
  var Fer = document.createElement("p");
  Fer.innerHTML = "Fer: " + BilanRecetteObj.ferParPortion;
  divBlocFer.appendChild(Fer);


  // Display Soduim;
  var divBlocSoduim = document.getElementById("BlocBilan");
  var Soduim = document.createElement("P");
  Soduim.innerHTML = "Soduim: " + BilanRecetteObj.sodiumParPortion;
  divBlocSoduim.appendChild(Soduim);

  //  Display VitamineB 12;
  var divBlocVitamineB12 = document.getElementById("BlocBilan");
  var VitamineB12 = document.createElement("p");
  VitamineB12.innerHTML = "Vitamines B12: " + BilanRecetteObj.vitamineB12ParPortion;
  divBlocVitamineB12.appendChild(VitamineB12);

  //  Display VitamineC;
  var divBlocVitamineC = document.getElementById("BlocBilan");
  var VitamineC = document.createElement("p");
  VitamineC.innerHTML = "Vitamines C: " + BilanRecetteObj.vitamineCParPortion;
  divBlocVitamineC.appendChild(VitamineC);


  // Display VitamineD;
  var divBlocVitamineD = document.getElementById("BlocBilan");
  var VitamineD = document.createElement("p");
  VitamineD.innerHTML = "Vitamines D: " + BilanRecetteObj.vitamineDParPortion;
  divBlocVitamineD.appendChild(VitamineD);
}