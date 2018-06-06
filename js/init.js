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

  //load the body of page 
  $("#page").load("./vues/accueil/accueil.html")

  //load the other scripts of the app components scripts and 
  getScript("vues/accueil/accueil.js");
  getScript("components/header/cmp.js");
  
}


