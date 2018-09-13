$("#btnExportPdfBilan").hide();
$("bilan_semaine-blocb-display").hide();

function displayBilan() {

  $("#btnExportPdfBilan").show();
  $("bilan_semaine-blocb-display").show();

  //select parent div tag
  var blocBilanElt = document.getElementById("blocBilan");
  var uniteMesurePourcent = "%";
  var uniteMesureMicroG = "&mu;g";

  // Envoi de l'objet FormData au serveur
  ajaxPOSTgetJSON("bilan", listDateRecette, (response) => {
    //iterate on list of recettes
    $("#blocBilan").html("");
    for (var i = 0; i < JSON.parse(response).listeRecettes.length; i++) {
      displayOneRecette(JSON.parse(response).listeRecettes[i], blocBilanElt, uniteMesurePourcent);
    }

    displayBilanRecette(JSON.parse(response), blocBilanElt, uniteMesureMicroG);

    //use btn export pdf
    $("#btnExportPdfBilan").on("click", () => {
      ajaxPOSTgetPDF("bilan/pdf", listDateRecette, (response) => {
        $("#holderBilanPdf").html("");
        renderPDF(response, document.getElementById('holderBilanPdf'));
      });

      $("#spinner-cmp").addClass("spinner");
      setTimeout(() => {
        //download pdf
        var canvas = document.getElementById("my-canvas");
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("Nutrimeal_bilan.pdf");
        $("#spinner-cmp").removeClass("spinner");
      }, 2200);
    });
  });
}

//dislay 1 recette
function displayOneRecette(recette, blocBilanElt, uniteMesure) {

  //create dynamique tags
  var titleElt = document.createElement("h4"),
    ferElt = document.createElement("p"),
    sodiumElt = document.createElement("p"),
    vitamineB12Elt = document.createElement("p"),
    vitamineCElt = document.createElement("p"),
    vitamineDElt = document.createElement("p");

  //add html in new tags
  titleElt.innerHTML = recette.nomRecette;
  ferElt.innerHTML = "Fer : " + recette.ferParPortion + " " + uniteMesure;
  sodiumElt.innerHTML = "Soduim : " + recette.sodiumParPortion + " " + uniteMesure;
  vitamineB12Elt.innerHTML = "Vitamines B12 : " + recette.vitamineB12ParPortion + " " + uniteMesure;
  vitamineCElt.innerHTML = "Vitamines C : " + recette.vitamineCParPortion + " " + uniteMesure;
  vitamineDElt.innerHTML = "Vitamines D : " + recette.vitamineDParPortion + " " + uniteMesure;

  //add new Elts in parent div tag
  blocBilanElt.appendChild(titleElt);
  blocBilanElt.appendChild(ferElt);
  blocBilanElt.appendChild(sodiumElt);
  blocBilanElt.appendChild(vitamineB12Elt);
  blocBilanElt.appendChild(vitamineCElt);
  blocBilanElt.appendChild(vitamineDElt);
}

//dislay bilan recette
function displayBilanRecette(bilanRecette, blocBilanElt, uniteMesure) {

  var bilanTitleElt = document.createElement("h4"),
    bilanFerElt = document.createElement("p"),
    bilanSodiumElt = document.createElement("p"),
    bilanVitaminesB12Elt = document.createElement("p"),
    bilanVitaminesCElt = document.createElement("p"),
    bilanVitaminesDElt = document.createElement("p");

  bilanTitleElt.innerHTML = " Bilan ";
  bilanFerElt.innerHTML = " Bilan Total en  Fer  est de : " + bilanRecette.bilanfer + " " + uniteMesure;
  bilanSodiumElt.innerHTML = " Bilan Total en  Soduim est de : " + bilanRecette.bilanSodium + " " + uniteMesure;
  bilanVitaminesB12Elt.innerHTML = " Bilan total en Vitamines B12 est de : " + bilanRecette.bilanVitamineB12 + " " + uniteMesure;
  bilanVitaminesCElt.innerHTML = " Bilan total en Vitamines C est de : " + bilanRecette.bilanVitamineC + " " + uniteMesure;
  bilanVitaminesDElt.innerHTML = " Bilan total en Vitamines D est de : " + bilanRecette.bilanVitamineD + " " + uniteMesure;

  blocBilanElt.appendChild(bilanTitleElt);
  blocBilanElt.appendChild(bilanFerElt);
  blocBilanElt.appendChild(bilanSodiumElt);
  blocBilanElt.appendChild(bilanVitaminesB12Elt);
  blocBilanElt.appendChild(bilanVitaminesCElt);
  blocBilanElt.appendChild(bilanVitaminesDElt);
}