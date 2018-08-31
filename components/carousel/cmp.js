/*randomisation des photos dans le slide acceuil*/
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomImage(){
  /*selection de img slide*/
  var slide1Elt = document.getElementById("slide1");
  var slide2Elt = document.getElementById("slide2");
  var slide3Elt = document.getElementById("slide3");
  var staticAccueilImg = document.getElementById("staticImg");

  var slide1Random = getRandom(1, 10);
  var slide2Random = getRandom(1, 10);
  var slide3Random = getRandom(1, 10);

  /*test que les 3 photos randomisée ne soient pas identique*/
  while (slide1Random === slide2Random 
    || slide1Random === slide3Random 
    || slide2Random === slide3Random) {
    slide1Random = getRandom(1, 10);
    slide2Random = getRandom(1, 10);
    slide3Random = getRandom(1, 10);
  }

  slide1Elt.src = "./img/img-" + slide1Random + ".jpg";
  slide2Elt.src = "./img/img-" + slide2Random + ".jpg";
  slide3Elt.src = "./img/img-" + slide3Random + ".jpg";
  staticAccueilImg.src = "./img/img-" + getRandom(1,10) + ".jpg";
}
//fire function
randomImage();