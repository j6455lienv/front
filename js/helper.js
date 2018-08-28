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

// compare recette name with object to know idRecette
function compareNomRecetteToKnowIdRecette(JSONresponse, inputRecette) {
  for (let i = 0; i < JSONresponse.numberOfElements; i++) {
    //compare the input recette with the recettes in jsonObject to find id
    if (inputRecette === JSONresponse.content[i].nomRecette) {
      return JSONresponse.content[i].idRecette;
    }
  }
}

//to hide the bloc who display data informations 
function hideBlocb(classIdName, boolean) {
  //disable hidden prop on display div
  var blocBElt = document.getElementsByClassName(classIdName)[0];
  blocBElt.hidden = boolean;
}

// var width;
// var height;
// $( window ).resize(function(e) {
//   console.log($("[value='Export PDF']"))
  
//   $("[value='Export PDF']").trigger("click");
//   $("canvas:first").remove();
//   console.log(e);
  
// });


function renderPDF(pPdfData, canvasContainer, options) {
  var options = options || {
    scale: 1
  };

  function renderPage(page) {
    var viewport = page.getViewport(options.scale);
    var canvas = document.createElement('canvas');
    //canvas.setAttribute("width", "100%");
    // canvas.width = "100%"; 
    var ctx = canvas.getContext('2d');
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    canvas.height = viewport.height;
    canvas.width = viewport.width;
    canvasContainer.appendChild(canvas);

    page.render(renderContext);
  }

  function renderPages(pdfDoc) {
    for (var num = 1; num <= pdfDoc.numPages; num++)
      pdfDoc.getPage(num).then(renderPage);
  }
  PDFJS.workerSrc = "lib/pdfjs-dist/build/pdf.worker.js";
  PDFJS.disableWorker = true;
  PDFJS.getDocument({
    data: pPdfData
  }).then(renderPages);
}