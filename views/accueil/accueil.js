$(document).ready(function () {
  //load carousel component to parent html
  $("#carousel").load("./components/carousel/cmp.html");
});

$(".accueil-button-link").on("click", function() {
  route('bilan_semaine');
});