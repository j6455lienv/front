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
  //load the other scripts of the app components scripts and 
  getScript("components/header/cmp.js");
  getScript("components/carousel/cmp.js");


  route('accueil');

 
  
}


