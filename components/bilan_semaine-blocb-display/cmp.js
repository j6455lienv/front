//Display Obj
function displayBilan() {
  console.log('display bilan ok');
  // Envoi de l'objet FormData au serveur
  ajaxPOSTgetJSON("bilan", listDateRecette, function (response) {
    console.log("post req => value of JSON: ")
    console.log(listDateRecette);
    // Affichage dans la console en cas de succès
    console.log("Commande envoyée au serveur => reponse:");
    console.log(JSON.parse(response));

  });
}