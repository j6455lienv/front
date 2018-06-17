function getRecette(){
  hideBlocb(false);

  //store values of controll bloc
  var inputRecette = document.getElementById("recette-bloca-input").value;
  var inputNbPersonnes = document.getElementById("recette-bloca-select").value;
  
  /*
  var toDisplay =[
    "id" = null,
    "recette" = null,
    "ingredients" = null,
    "imgSrc" = null
  ];
  */

  var idToDisplay = null;
  var recetteToDisplay = null;
  var ingredientsToDisplay = null;
  var imgSrcToDisplay = null;
  
  //console.log("recette from display:"+inputRecette+" pour "+inputNbPersonnes+" personnes");
  //console.log(ObjectSize(jsonObject));
  console.log(jsonObject);
  //console.log(listrecette2);

  //use helper ObjectSize to count size of jsonObject
  for(let i=0; i < ObjectSize(jsonObject);i++){
    //console.log("id => "+jsonObject[i].id + " recette => " + jsonObject[i].recette);
    //compare the input recette with the recettes in jsonObject to find id
    if(inputRecette === jsonObject[i].recette){
      idToDisplay = jsonObject[i].id;
      recetteToDisplay = jsonObject[i].recette;
      ingredientsToDisplay = jsonObject[i].ingredients;
      imgSrcToDisplay = jsonObject[i].imgSrc;
    }
  }

  if(idToDisplay === null){
    errorMessage(recetteToDisplay);
  }else{
    displayRecette(idToDisplay,imgSrcToDisplay,recetteToDisplay,ingredientsToDisplay);
  }
}

function displayRecette(idToDisplay,imgSrcToDisplay,recetteToDisplay,ingredientsToDisplay){

  //test foreach ok
  console.log("id find in foreach: "+idToDisplay);

  //empty div element
  $(".blocImg").html("");
  //set value in display layout
  var divBlocImgElt = document.getElementsByClassName("blocImg")[0];
  var imgElt = document.createElement("img");
    imgElt.src = imgSrcToDisplay;
    imgElt.className = "img-responsive img-rounded";
  divBlocImgElt.appendChild(imgElt);

  //empty div element
  $(".blocDetail").html("");
  //set value in display layout
  var divBlocDetailElt = document.getElementsByClassName("blocDetail")[0];
  var titleElt = document.createElement("h4");
    titleElt.innerHTML = recetteToDisplay;
  divBlocDetailElt.appendChild(titleElt);
  
  //empty div element
  $(".blocIngredients").html("");
  //set value in display layout
  var divBlocIngredientsElt = document.getElementsByClassName("blocIngredients")[0];
  var ingredientsElt = document.createElement("p");
    ingredientsElt.innerHTML = ingredientsToDisplay;
  divBlocIngredientsElt.appendChild(ingredientsElt); 
}

function errorMessage(){
  //empty bloc divs
  $(".blocImg").html("");
  $(".blocDetail").html("");
  $(".blocIngredients").html("");
  
  //store message
  var errorMessage = "Cette recette n'est pas repertoriée dans notre base de données, Veuillez recommencer";

  var parentElt = document.getElementsByClassName("blocImg")[0];
  var divElt = document.createElement("div");
    divElt.className = "alert alert-danger";
    divElt.innerHTML = errorMessage;
  var strongElt = document.createElement("strong");
    strongElt.innerHTML = "Attention ! ";

  //add elements
  divElt.insertBefore(strongElt, divElt.firstChild);
  parentElt.appendChild(divElt);

  //disable error message
  setTimeout(function(){ 
    $(".blocImg").html("");
    hideBlocb(true);
  }, 3500);
}

//to hide the bloc who display data informations 
function hideBlocb(boolean){
    //disable hidden prop on display div
    var blocBElt = document.getElementsByClassName("recette-blocb-display")[0];
    blocBElt.hidden = boolean;
}