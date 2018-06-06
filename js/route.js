/**
 * filename: /js/route.js
 * In this file, one function to create route 
 * 
 */

function route(pageName){
	//load the html and js files of the the route 
	getScript('vues/'+pageName+'/'+pageName+'.js');
	$("#page").load('./vues/'+pageName+'/'+pageName+'.html');
	

}