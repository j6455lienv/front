//global variables
var listDateRecette = [];
var selectTbodyElt = document.getElementById('tbody-crud');
var currentIndex = null;

function createTable() {

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
    newDateTd.innerHTML = listDateRecette[i].recetteDate;
    newRecetteTd.innerHTML = listDateRecette[i].recetteName;

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
  }
}

function createRow() {
  var newDatePicker = document.getElementById('datepickerId');
  var newRecette = document.getElementById('bilan_recette-bloca-input');

  //control values quality 
  if (newDatePicker.value === '' || newRecette.value === '') {
    /* UP_implementation d'une feature errorMessage à mutualiser 
    avec celle de error-blocb-display dans helper.js __ merci à toi */
    console.log("error message => no value or no good recette");
  } else {
    //add new object to the displayTableBlocA Array 
    listDateRecette.push({
      // modify object
      "recetteDate": newDatePicker.value,
      "recetteName": newRecette.value
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

  var recetteDate = document.getElementById("datepickerId").value;
  var recetteName = document.getElementById("bilan_recette-bloca-input").value;

  // update array
  listDateRecette[currentIndex].recetteDate = recetteDate;
  listDateRecette[currentIndex].recetteName = recetteName;

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