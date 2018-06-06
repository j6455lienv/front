/**
 * filename: /js/helper.js
 * file of helper functions
 * 
 */

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
