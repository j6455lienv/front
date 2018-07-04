//Display Obj
function displayBilan() {
  console.log('display bilan ok');
  // Envoi de l'objet FormData au serveur
  ajaxPOSTgetJSON("bilan", dataEchantillon, function (response) {
    // Affichage dans la console en cas de succès
    console.log("Commande envoyée au serveur");
    console.log(JSON.parse(response));

  });
}