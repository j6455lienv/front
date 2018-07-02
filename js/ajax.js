var hostPath = "http://localhost:8080/";

/** ajax GET
 * input: JSON
 * output: JSON
 */
function ajaxGetgetJSON(url, data, callback) {
  //TODO
};

/** ajax GET
 * input: JSON
 * output: JSON
 */
function ajaxPostgetJSON(url, data, callback) {
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

  // Définit le contenu de la requête comme étant du JSON
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // Transforme la donnée du format JSON vers le format texte avant l'envoi
  data = JSON.stringify(data);
  req.send(data);
}

/** ajax POST
 * input: JSON
 * output: binary PDF
 */
function ajaxPOSTgetPDF(path, data, callback) {
  var url = hostPath + path;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.addEventListener("load", function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(xhr.responseText);

    } else {
      console.error(xhr.status + " " + xhr.statusText + " " + url);
    }
  });
  xhr.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.overrideMimeType('text/plain; charset=x-user-defined');

  xhr.send(JSON.stringify(data));
}