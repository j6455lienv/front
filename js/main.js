$(document).ready(function(){
    var req = $.get("./components/carousel/cmp.html");
    
    $.get("./components/carousel/cmp.html", function(data){
        $("#header").html(data);
    })

    $(".page").load("./carousel/test.html");
        
    $("#header").html("je suis un header");
    $(".page").html(req);
    $(".footer").html("je suis un footer");

});