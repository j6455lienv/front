function createTable(listDateRecette) {
  //create Element
  var selectTbodyElt = document.getElementById('tbody-crud');

  //create element
  var newTr = document.createElement('tr');
  var newThId = document.createElement('th');
  var newDateTd = document.createElement('td');
  var newRecetteTd = document.createElement('td');
  var newEditTd = document.createElement('td');

  var editSpan = document.createElement('span');
  var deleteSpan = document.createElement('span');

  for (let i = 0; i < listDateRecette.length; i++) {
    console.log(listDateRecette[i]);

    //param Element
    newThId.scope = "col";
    newThId.innerHTML = i;
    newDateTd.innerHTML = listDateRecette[i].recetteDate;
    newRecetteTd.innerHTML = listDateRecette[i].recetteName;

    // buttons
    editSpan.innerHTML = '<i class="fas fa-pencil-alt fa-1x"></i>';
    editSpan.addEventListener("click", function () {
      editRow(i, listDateRecette[i]);
    }, false);

    deleteSpan.innerHTML = '<i class="far fa-trash-alt fa-1x"></i>';
    deleteSpan.addEventListener("click", function () {
      deleteRow(i, listDateRecette[i]);
    }, false);

    //test value object
    // console.log(listDateRecette[i].recetteDate);
    // console.log(newDateTd);
    // console.log(newRecetteTd);

    //add child to parent body
    newEditTd.appendChild(editSpan);
    newEditTd.appendChild(deleteSpan);

    newTr.appendChild(newThId);
    newTr.appendChild(newDateTd);
    newTr.appendChild(newRecetteTd);
    newTr.appendChild(newEditTd);
    selectTbodyElt.appendChild(newTr);
  }

}

function editRow(indexArray, recetteObj) {
  alert("edit function ok");
  console.log("edit function ok");
  console.log(recetteObj);
}

function deleteRow(indexArray,recetteObj) {
  alert("delete function ok");
  console.log("delete function ok");
  console.log(recetteObj);
}