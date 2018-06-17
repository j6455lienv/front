function getRecette(){
  var inputRecette = document.getElementById("recette-bloca-input").value;
  var inputNbPersonnes = document.getElementById("recette-bloca-select").value;
  
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

  //test foreach ok
  console.log("id find in foreach: "+idToDisplay);

  //empty div element
  $(".blocImg").html("");
  //set value in display layout
  var divBlocImgElt = document.getElementsByClassName("blocImg")[0];
  var imgElt = document.createElement("img");
  imgElt.src = imgSrcToDisplay;
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

