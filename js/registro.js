$(".register").css("display", "none")

$(function(){
    $("#evento-registrar").click(function(){
        $(".register").css("display", "flex")
    })
})

$(function(){
    $("#cerrarRegistro").click(function(){
        $(".register").css("display","none")
    })
})