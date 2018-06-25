//add datepicker
$('.bilan_semaine-datepicker').load("components/datepicker/cmp.html");

var modal = $("#dynamicallModal");

function showModal(editOrCreate, indexArray) {
  if (editOrCreate === "create") {
    console.log('create ok- index => ' + indexArray + ', type modal => ' + editOrCreate);
    // show create Modal
    $('#button-modal-create').show();
    $('#button-modal-edit').hide();

    modal.find('.modal-title').text('Créer Recette');
    modal.find('#datepickerId').val('');
    modal.find('#bilan_recette-bloca-input').val('');
    // show param modal
    modal.modal("show");

  } else if (editOrCreate === "edit") {
    console.log('edit ok- index => ' + indexArray + ', type modal => ' + editOrCreate);

    currentIndex = indexArray;
    $('#button-modal-create').hide();
    $('#button-modal-edit').show();

    //var button = $(event.relatedTarget); // Button that triggered the modal

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    modal.find('.modal-title').text('Modifier la Recette à l\'id : ' + indexArray);

    // display values
    // datepicker id to put value: datepickerId
    modal.find('#datepickerId').val(listDateRecette[indexArray].recetteDate);
    // input Recette id to put value: bilan_recette-bloca-input
    modal.find('#bilan_recette-bloca-input').val(listDateRecette[indexArray].recetteName);

    // show param modal
    modal.modal("show");
  }
}