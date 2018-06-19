$('.bilan_semaine-datepicker').load("components/datepicker/cmp.html");

// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })

//global variables for recettes page layout
var jsonObject = [];

//attention datas à changer pour la mise en prod
var apiUrl = "data/recettes.json";

$(document).ready(function () {
  //xhr params
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8;');
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      jsonObject = JSON.parse(this.responseText);
      
      //console.log("response_xhr: ");
      //console.log(jsonObject);

      var listrecette = [];
      //var listrecette2 = []:
      //add json object in the list of recettes
      jsonObject.forEach(function(obj){
        listrecette.push(obj.recette);
        //listrecette2.push(
          //{
          //"id":obj.id,
          //"recette":obj.recette
          //}
        //);
      });
      
      //console.log("listrecette_array for source autocompletion: ");
      //console.log(listrecette);
      //console.log("listrecette2_array key value: ");
      //console.log(listrecette2);

      //autocomplete jquery ui library
      $( "#recette-bloca-input" ).autocomplete({
        source: listrecette
      });
    }

    if (this.status != 200) {
      console.log('error: ' + (this.status ? this.statusText : 'request failed'));
    }
  };
});
