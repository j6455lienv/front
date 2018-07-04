//add datepicker
$('.bilan_semaine-datepicker').load("components/datepicker/cmp.html");

var modal = $("#dynamicallModal");

function showModal(editOrCreate, indexArray) {
  if (editOrCreate === "create") {
    // console.log('create ok- index => ' + indexArray + ', type modal => ' + editOrCreate);
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
    modal.find('#datepickerId').val(listDateRecette[indexArray].dateRecette);
    modal.find('#bilan_recette-bloca-input').val(listDateRecette[indexArray].nomRecette);

    // show param modal
    modal.modal("show");
  }
}

// global variable for recettes page layout
var JSONresponseBilan = [];

$("#bilan_recette-bloca-input").on('keyup', function () {
  var listRecette = [];
  var inputValue = document.getElementById("bilan_recette-bloca-input").value;

  ajaxGETgetJSON("recette/search?string=" + inputValue, function (response) {
    JSONresponse = JSON.parse(response);

    //push recette on array to display autocomplete function
    for (var i = 0; i < JSONresponse.numberOfElements; i++) {
      listRecette.push(JSONresponse.content[i].nomRecette);
    }

    // autocomplete jquery ui library
    $("#bilan_recette-bloca-input").autocomplete({
      source: listRecette
    });

    console.log("JSONresponse : ");
    console.log(JSONresponse);
  });
});