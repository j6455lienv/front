/**
 * filename: /js/init.js
 * In this file: the init load methode t
 * 
 */

//initialize the first load
function init() {
  //load header and footer components
  $("#header").load("./components/header/cmp.html");
  $("#footer").load("./components/footer/cmp.html");
  $("#spinner").load("./components/spinner/cmp.html");
  route('accueil');
}