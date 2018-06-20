//global list de recette
var listDateRecette = null;
//create Element
var selectTbodyElt = document.getElementById('tbody-crud');

function createTable(listDateRecetteParam) {
  // empty body
  selectTbodyElt.innerHTML = "";
  // set new list de recette to global
  listDateRecette = listDateRecetteParam;
  console.log('global listDateRecette');
  console.log(listDateRecette);

  for (var i = 0; i < listDateRecette.length; i++) {
    //create element
    var newTr = document.createElement('tr');
    var newThId = document.createElement('th');
    var newDateTd = document.createElement('td');
    var newRecetteTd = document.createElement('td');
    var newEditDeleteTd = document.createElement('td');

    var editSpan = document.createElement('span');
    var deleteSpan = document.createElement('span');

    console.log(listDateRecette.length);
    // big array
    // console.log("big Array in createTable(): ");
    // console.log(listDateRecette);

    //array with item
    //console.log(listDateRecette[i]);

    //param Element
    newThId.scope = "col";
    newThId.innerHTML = i;
    newDateTd.innerHTML = listDateRecette[i].recetteDate;
    newRecetteTd.innerHTML = listDateRecette[i].recetteName;

    // buttons
    editSpan.innerHTML = '<i class="fas fa-pencil-alt fa-1x" style="padding-right:14%"></i>';
    // editSpan.addEventListener("click", function () {
    //   editRow(i, listDateRecette);
    // }, false);

    // deleteSpan.onclick = deleteRow(i , listDateRecette);
    deleteSpan.innerHTML = '<i class="far fa-trash-alt fa-1x"></i>';
    // deleteSpan.setAttribute("onclick", function () {
    //   deleteRow(i, listDateRecette);
    // });

    // var deleteRowConcat = "'deleteRow(" + i + ", " + listDateRecette + ");"";
    deleteSpan.setAttribute("onclick", "javascript:deleteRow(" + i + ");");

    // test value object
    // console.log(listDateRecette[i].recetteDate);
    // console.log(newDateTd);
    // console.log(newRecetteTd);

    //add child to parent body
    newEditDeleteTd.appendChild(editSpan);
    newEditDeleteTd.appendChild(deleteSpan);

    newTr.appendChild(newThId);
    newTr.appendChild(newDateTd);
    newTr.appendChild(newRecetteTd);
    newTr.appendChild(newEditDeleteTd);
    selectTbodyElt.appendChild(newTr);
  }
}

function editRow(indexArray, listDateRecette) {
  console.log("function edit, index tableau: " + indexArray);
  console.log(recetteObj);
}

function deleteRow(indexArray) {
  console.log('**** DELETE FUNCTION ****');
  // alert("delete function ok");
  // console.log("delete function ok");
  // console.log(recetteObj);

  // controll
  console.log('old Array: ');
  console.log(listDateRecette);

  listDateRecette.splice(indexArray, 1);

  console.log('new Array: ');
  console.log(listDateRecette);

  createTable(listDateRecette);
}