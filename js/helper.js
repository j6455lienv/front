/**
 * filename: /js/helper.js
 * helper functions
 * 
 */

// add js scripts in the project
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

//return size of an object
function ObjectSize(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

//to hide the bloc who display data informations 
function hideBlocb(classIdName, boolean) {
  //disable hidden prop on display div
  var blocBElt = document.getElementsByClassName(classIdName)[0];
  blocBElt.hidden = boolean;
}