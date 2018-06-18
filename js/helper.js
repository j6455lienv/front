/**
 * filename: /js/helper.js
 * file of helper functions
 * 
 */

// 
function getScript(scriptLink) {
  $(document).ready(function () {
    $.getScript('./' + scriptLink, function (data, textStatus, jqxhr) {
      //console.log( data );
      //console.log( textStatus );
      //console.log( jqxhr.status );
      //console.log( "Load was performed." );
    });
  });
}

// AJAX GET
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
        // Appelle la fonction callback en lui passant la réponse de la requête
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, callback, isJson) {
  var req = new XMLHttpRequest();
  req.open("POST", url);
  req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
          // Appelle la fonction callback en lui passant la réponse de la requête
          callback(req.responseText);
      } else {
          console.error(req.status + " " + req.statusText + " " + url);
      }
  });
  req.addEventListener("error", function () {
      console.error("Erreur réseau avec l'URL " + url);
  });
  if (isJson) {
      // Définit le contenu de la requête comme étant du JSON
      req.setRequestHeader("Content-Type", "application/json");
      // Transforme la donnée du format JSON vers le format texte avant l'envoi
      data = JSON.stringify(data);
  }
  req.send(data);
}


//return size of an object
function ObjectSize(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

//to hide the bloc who display data informations 
function hideBlocb(className ,boolean){
  //disable hidden prop on display div
  var blocBElt = document.getElementsByClassName(className)[0];
  blocBElt.hidden = boolean;
}