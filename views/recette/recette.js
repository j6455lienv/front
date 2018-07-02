$(document).ready(function () {
  //load blocs component to parent html
  $("#recette-bloca-controll").load("./components/recette-bloca-controll/cmp.html");
  $("#recette-blocb-display").load("./components/recette-blocb-display/cmp.html");
  $("#recette-blocb-export").load("./components/export-pdf/cmp.html");
   
});

//PDF => export pdf, renvoi le code source pdf dans le reponse 
// => reste à decoder et generer le pdf 
function exportPdfRecette() {
  ajaxPOSTgetPDF("recette/pdf", dataEchantillon, function (response) {
    renderPDF(response, document.getElementById('holderRecette'));
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