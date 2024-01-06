'use_strcit'

$(document).ready(function () {

    //Load
    //$("#datos").load("https://reqres.in/");

    //Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
        console.log(response);
    });
    
    /*var usuario = {
        name: "Prueba",
        web: "https://www.google.com.mx/"
    };
    $.post(https://reqres.in/api/users, usuario, function(response){
        console.log(response);
    });
*/
    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        
        console.log(usuario);

        /*$.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function () {
            alert("Usuario Añadido Correctamente.");   
        }).fail(function (){
            alert("Ha Ocurrido un Error.");
        });*/

        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'aplication/json',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando Usuario.");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error.");
            },
            timeout: 1000
        }).done(function () {
            alert("Usuario Añadido Correctamente.");   
        }).fail(function () {
            alert("Ha Ocurrido un Error.");
        });

        $(".limpiar").val("");
        return false;
    });
});