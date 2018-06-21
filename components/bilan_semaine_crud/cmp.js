var listDateRecette = null; //global list de recette
var selectTbodyElt = document.getElementById('tbody-crud'); //create Element

function handlerDisplayingModal(actionType) {
  //show / hide modal buttons  
  if(actionType === "create"){
    $('#button-modal-create').show();
    $('#button-modal-edit').hide();
  } else if (actionType === "edit"){
    $('#button-modal-create').hide();
    $('#button-modal-edit').show();
  }
} 

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
    editSpan.setAttribute("onclick", "javascript:editRow(" + i + ");");
    editSpan.setAttribute("data-toggle", "modal");
    editSpan.setAttribute("data-target", "#dynamicallModal");

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

//to edit line in the crud table
function editRow(indexArray) {
  //console.log("function edit, index tableau: " + indexArray);

  // handle modal
  $('#dynamicallModal').on('show.bs.modal', function (event) {
    handlerDisplayingModal("edit");//hide create button

    var button = $(event.relatedTarget); // Button that triggered the modal

    // hiddenCreateButton data bidding
    var boolCreateButt = button.data('hiddenCreateButton') // Extract info from data-* attributes

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('Modifier la Recette à l\'id : ' + indexArray);

    // datepicker id to put value: datepickerId
    modal.find('#datepickerId').val(listDateRecette[indexArray].recetteDate);
    // input Recette id to put value: bilan_recette-bloca-input
    modal.find('#bilan_recette-bloca-input').val(listDateRecette[indexArray].recetteName);
  })
}

// to delete line in the crud table 
function deleteRow(indexArray) {
  //delete line with index
  listDateRecette.splice(indexArray, 1);
  //update table
  createTable(listDateRecette);
}