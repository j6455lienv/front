$(document).ready(() => {
  //load carousel component to parent html
  $("#carousel").load("./components/carousel/cmp.html");
});

$(".accueil-button-link").on("click", () => {
  route('bilan_semaine');
});