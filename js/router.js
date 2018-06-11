/**
 * filename: /js/route.js
 * In this file, one function to create route 
 * 
 */

function route(pageName){
  let pathname = "/nutrimeal/";
  
	//load the html and js files of the the route 
	getScript('views/'+pageName+'/'+pageName+'.js');
	$("#page").load('./views/'+pageName+'/'+pageName+'.html');

  //create path url
	window.history.pushState(null,null, pathname + pageName);
	
}