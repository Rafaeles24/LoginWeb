$("#boton-login").on("click", function(){
    var posicion = $("#login").offset().top;
    $("html, body").animate({
        scrollTop: posicion
    }, 500); 
});