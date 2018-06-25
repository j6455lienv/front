//add datepicker
$('.bilan_semaine-datepicker').load("components/datepicker/cmp.html");

var modal = $("#dynamicallModal");

function showModal(editOrCreate, indexArray) {
  if (editOrCreate === "create") {
    console.log('create ok- index => ' + indexArray + ', type modal => ' + editOrCreate);
    // show or hide modal buttons
    $('#button-modal-create').show();
    $('#button-modal-edit').hide();

    modal.find('.modal-title').text('Créer Recette');
    modal.find('#datepickerId').val('');
    modal.find('#bilan_recette-bloca-input').val('');
    // show param modal
    modal.modal("show");

  } else if (editOrCreate === "edit") {
    console.log('edit ok- index => ' + indexArray + ', type modal => ' + editOrCreate);

    // set current index
    currentIndex = indexArray;

    // show or hide modal buttons
    $('#button-modal-create').hide();
    $('#button-modal-edit').show();

    modal.find('.modal-title').text('Modifier la Recette à l\'id : ' + indexArray);
    modal.find('#datepickerId').val(listDateRecette[indexArray].recetteDate);
    modal.find('#bilan_recette-bloca-input').val(listDateRecette[indexArray].recetteName);

    // show param modal
    modal.modal("show");
  }
}