//global variables
var listDateRecette = [];
var selectTbodyElt = document.getElementById('tbody-crud');
var currentIndex = null;

function createTable() {

  selectTbodyElt.innerHTML = ""; // empty body

  for (var i = 0; i < listDateRecette.length; i++) {
    //create element
    var newTr = document.createElement('tr');
    var newThId = document.createElement('th');
    var newDateTd = document.createElement('td');
    var newRecetteTd = document.createElement('td');
    var newEditDeleteTd = document.createElement('td');
    var editSpan = document.createElement('span');
    var deleteSpan = document.createElement('span');

    //param Element
    newThId.scope = "col";
    newThId.innerHTML = i;

    newDateTd.innerHTML = listDateRecette[i].dateRecette;
    newRecetteTd.innerHTML = listDateRecette[i].nomRecette;

    // crud buttons
    editSpan.innerHTML = '<i class="fas fa-pencil-alt fa-1x" style="padding-right:18%"></i>';
    editSpan.setAttribute("onclick", "javascript:showModal('edit'," + i + ");");
    editSpan.setAttribute("data-toggle", "modal");
    //editSpan.setAttribute("data-target", "#dynamicallModal");

    deleteSpan.innerHTML = '<i class="far fa-trash-alt fa-1x"></i>';
    deleteSpan.setAttribute("onclick", "javascript:deleteRow(" + i + ");");

    //add child to parent body
    newEditDeleteTd.appendChild(editSpan);
    newEditDeleteTd.appendChild(deleteSpan);

    newTr.appendChild(newThId);
    newTr.appendChild(newDateTd);
    newTr.appendChild(newRecetteTd);
    newTr.appendChild(newEditDeleteTd);
    selectTbodyElt.appendChild(newTr);

    console.log(listDateRecette);
  }
}

function createRow() {
  var dateRecetteCreate = document.getElementById('datepickerId').value;
  var nomRecetteCreate = document.getElementById('bilan_recette-bloca-input').value;
  var idRecetteCreate = null;

  // compare recette name to know id
  console.log(JSONresponse);
  console.log("Nom de la recette create: " + nomRecetteCreate);

  for (let i = 0; i < JSONresponse.numberOfElements; i++) {
    if (nomRecetteCreate === JSONresponse.content[i].nomRecette) {
      idRecetteCreate = JSONresponse.content[i].id;
    }
  }

  console.log("id recette recupérée: " + idRecetteCreate);
  //control values quality 
  if (dateRecetteCreate === '' || nomRecetteCreate === '') {
    /* UP_implementation d'une feature errorMessage à mutualiser 
    avec celle de error-blocb-display dans helper.js __ merci à toi */
    console.log("error message => no value or no good recette");
  } else {
    //add new object to the displayTableBlocA Array 
    listDateRecette.push({
      // modify object
      "id": idRecetteCreate,
      "nomRecette": nomRecetteCreate,
      "dateRecette": dateRecetteCreate
      //----//
      // "idRecette": 1,
      // "nomRecette": "test"
    });
    console.log(idRecetteCreate);
    console.log(listDateRecette);
    createTable();
  }
}

//to edit line in the crud table
function editRow() {

  var dateRecetteUpdated = document.getElementById("datepickerId").value;
  var nomRecetteUpdated = document.getElementById("bilan_recette-bloca-input").value;
  var idRecetteUpdated = null;

  for (let i = 0; i < JSONresponse.numberOfElements; i++) {
    //compare the input recette with the recettes in jsonObject to find id
    if (nomRecetteUpdated === JSONresponse.content[i].nomRecette) {
      idRecetteUpdated = JSONresponse.content[i].idRecette;
    }
  }
  // update array
  listDateRecette[currentIndex].idRecette = idRecetteUpdated;
  listDateRecette[currentIndex].dateRecette = dateRecetteUpdated;
  listDateRecette[currentIndex].nomRecette = nomRecetteUpdated;

  //update table
  createTable();

  modal.modal("hide");
}

// to delete line in the crud table 
function deleteRow(indexArray) {
  //delete line with index
  listDateRecette.splice(indexArray, 1);
  //update table
  createTable();
}

$(".bilan-but").on("click", function () {
  displayBilan();
});