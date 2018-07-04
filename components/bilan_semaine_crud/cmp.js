//global variables
var listDateRecette = [];
var selectTbodyElt = document.getElementById('tbody-crud');
var currentIndex = null;

function createTable() {

  console.log("create table function: ");
  console.log(JSONresponse);
  console.log(JSONresponse.content[0].idRecette);

  selectTbodyElt.innerHTML = ""; // empty body

  //test sorting array
  // var mapAsc = new Array([...listDateRecette.entries()].sort());
  // console.log('map Asc : ');
  // console.log(mapAsc);

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

    // test value object
    // console.log(listDateRecette[i].recetteDate);
    // console.log(newDateTd);
    // console.log(newRecetteTd);

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
  var newDatePicker = document.getElementById('datepickerId');
  var newRecette = document.getElementById('bilan_recette-bloca-input');

  // compare recette name to know id
  console.log(JSONresponse);
  console.log(newRecette);
  var idRecette = compareNomRecetteToKnowIdRecette(JSONresponse, newRecette);

  console.log("id recette recupérée: "+idRecette);
  //control values quality 
  if (newDatePicker.value === '' || newRecette.value === '') {
    /* UP_implementation d'une feature errorMessage à mutualiser 
    avec celle de error-blocb-display dans helper.js __ merci à toi */
    console.log("error message => no value or no good recette");
  } else {
    //add new object to the displayTableBlocA Array 
    listDateRecette.push({
      // modify object
      "idRecette": idRecette,
      "nomRecette": newRecette.value,
      "dateRecette": newDatePicker.value
      //----//
      // "idRecette": 1,
      // "nomRecette": "test"
    });
    console.log(listDateRecette);
    createTable();
  }
}

//to edit line in the crud table
function editRow() {

  var dateRecetteUpdated = document.getElementById("datepickerId").value;
  var nomRecetteUpdated = document.getElementById("bilan_recette-bloca-input").value;

  var idRecetteUpdated = compareNomRecetteToKnowIdRecette()
  // update array
  listDateRecette[currentIndex].idRecette = ;
  listDateRecette[currentIndex].dateRecette = dateRecette;
  listDateRecette[currentIndex].nomRecette = nomRecette;

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

// type date post bilan/
// [{
//   "idRecette": 1,
//   "nomRecette": "",
//   "dateRecette": ""

// }, {
//   "idRecette": 2,
//   "nomRecette": "",
//   "dateRecette": ""
// }, {
//   "idRecette": 3,
//   "nomRecette": "",
//   "dateRecette": ""
// }]