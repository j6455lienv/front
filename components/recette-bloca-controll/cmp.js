$("#recette-bloca-input").on('keyup', () => {
  var listRecette = [];
  var inputValue = document.getElementById("recette-bloca-input").value;

  ajaxGETgetJSON("recette/search?string=" + inputValue, (response) => {
    JSONresponse = JSON.parse(response);

    //push recette on array to display autocomplete function
    for (var i = 0; i < JSONresponse.numberOfElements; i++) {
      listRecette.push(JSONresponse.content[i].nomRecette);
    }

    // autocomplete jquery ui library
    $("#recette-bloca-input").autocomplete({
      source: listRecette
    });
  });
});

$(".recette-but").on("click", () => {
  displayRecette();
});