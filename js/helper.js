$(document).ready(function () {

  static function addCmp(fromCmpName, toClassNameHtml){
		return '$(".' + toClassNameHtml + '").load("./components/' + fromCmpName + '/cmp.html");';
  }
  
  
});