$(document).ready(function () {
  //load blocs component to parent html
  $("#bilan_semaine-bloca-controll").load("./components/bilan_semaine-bloca-controll/cmp.html");
  $("#bilan_semaine-blocb-display").load("./components/bilan_semaine-blocb-display/cmp.html");
});

//PDF => export pdf, renvoi le code source pdf dans le reponse 
// => reste à decoder et generer le pdf 
function exportPdfBilanPdf() {
  ajaxPOSTgetPDF("bilan/pdf", dataEchantillon, function (response) {
    renderPDF(response, document.getElementById('holderBilanPdf'));
    // console.log(response);
    // console.log(PDFJS.PDFWorker);
  });
}

//echantillon -> test
var dataEchantillon = [{
  "idRecette": 1,
  "nomRecette": "Salade césar"
}, {
  "idRecette": 2,
  "nomRecette": "recette"
}];