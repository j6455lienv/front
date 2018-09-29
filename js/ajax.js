var hostPath = "https://github.com/j6455lienv/nutrimeal_back/";

/** ajax GET
 * return: JSON
 */
function ajaxGETgetJSON(path, callback) {
  var url = hostPath + path;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(xhr.responseText);

    } else {
      console.error(xhr.status + " " + xhr.statusText + " " + url);
    }
  });
  xhr.addEventListener("error", () => {
    console.error("Erreur réseau avec l'URL " + url);
  });

  // Définit le contenu de la requête comme étant du JSON
  xhr.setRequestHeader("Content-Type", "application/json");
  // Transforme la donnée du format JSON vers le format texte avant l'envoi
  xhr.send();
}

/** ajax GET
 * return: PDF
 */
function ajaxGETgetPDF(path, callback) {
  var url = hostPath + path;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      callback(xhr.responseText);
    } else {
      console.error(xhr.status + " " + xhr.statusText + " " + url);
    }
  });
  xhr.addEventListener("error", () => {
    console.error("Erreur réseau avec l'URL " + url);
  });

  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.overrideMimeType('text/plain; charset=x-user-defined');
  xhr.send();
}

/** ajax POST
 * input: JSON
 * output: JSON
 */
function ajaxPOSTgetJSON(path, data, callback) {
  var url = hostPath + path;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(xhr.responseText);

    } else {
      console.error(xhr.status + " " + xhr.statusText + " " + url);
    }
  });
  xhr.addEventListener("error", () => {
    console.error("Erreur réseau avec l'URL " + url);
  });
  // Définit le contenu de la requête comme étant du JSON
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // Transforme la donnée du format JSON vers le format texte avant l'envoi
  data = JSON.stringify(data);
  xhr.send(data);
}

/** ajax POST
 * input: JSON
 * output: binary PDF
 */
function ajaxPOSTgetPDF(path, data, callback) {
  var url = hostPath + path;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(xhr.responseText);

    } else {
      console.error(xhr.status + " " + xhr.statusText + " " + url);
    }
  });
  xhr.addEventListener("error", () => {
    console.error("Erreur réseau avec l'URL " + url);
  });

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.overrideMimeType('text/plain; charset=x-user-defined');

  xhr.send(JSON.stringify(data));
}