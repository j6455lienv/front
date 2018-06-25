var listDateRecette = null; //global list de recette
var selectTbodyElt = document.getElementById('tbody-crud'); //create Element
var currentIndex = null;

function createTable(listDateRecetteParam) {

  selectTbodyElt.innerHTML = ""; // empty body
  listDateRecette = listDateRecetteParam; // set new list de recette to global

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
    displayTableBlocA.push({
      "recetteDate": newDatePicker.value,
      "recetteName": newRecette.value
    });
    console.log(displayTableBlocA);
    createTable(displayTableBlocA);
  }
}

//to edit line in the crud table
function editRow() {

  var recetteDate = document.getElementById("datepickerId").value;
  console.log(recetteDate);
  var recetteName = document.getElementById("bilan_recette-bloca-input").value;
  console.log(recetteName);
  
  // update array
  listDateRecette[currentIndex].recetteDate = recetteDate;
  listDateRecette[currentIndex].recetteName = recetteName;

  //update table
  createTable(listDateRecette);
}

// to delete line in the crud table 
function deleteRow(indexArray) {
  //delete line with index
  listDateRecette.splice(indexArray, 1);
  //update table
  createTable(listDateRecette);
}