$(document).ready(() => {
  //load blocs component to parent html
  $("#bilan_semaine-bloca-controll").load("./components/bilan_semaine-bloca-controll/cmp.html");
  $("#bilan_semaine-blocb-display").load("./components/bilan_semaine-blocb-display/cmp.html");
});

//PDF => export pdf, renvoi le code source pdf dans le reponse 
// => reste à decoder et generer le pdf 
function exportPdfBilanPdf() {
  ajaxPOSTgetPDF("bilan/pdf", dataEchantillon, (response) => {
    renderPDF(response, document.getElementById('holderBilanPdf'));
  });
}