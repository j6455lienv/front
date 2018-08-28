$("#recette-bloca-input").on('keyup', function () {
  var listRecette = [];
  var inputValue = document.getElementById("recette-bloca-input").value;

  ajaxGETgetJSON("recette/search?string=" + inputValue, function (response) {
    JSONresponse = JSON.parse(response);

    //push recette on array to display autocomplete function
    for (var i = 0; i < JSONresponse.numberOfElements; i++) {
      listRecette.push(JSONresponse.content[i].nomRecette);
    }

    // console.log(listRecette);
    // console.log(JSONresponse);

    // autocomplete jquery ui library
    $("#recette-bloca-input").autocomplete({
      source: listRecette
    });
  });
});

$(".recette-bloca-button").on("click", function(){
  displayRecette();
});