'use_strcit'


    $(document).ready(function(){ 
        //MouseOver y MouseOut
        var caja = $("#caja");

        /*caja.mouseover(function(){
            $(this).css("background-color", "red");
        });

        caja.mouseout(function(){
            $(this).css("background-color", "green");
        });*/
    

    function cambiaRojo(){
        $(this).css("background-color", "red");
    }
    function cambiaVerde(){
        $(this).css("background-color", "green");
    }
        //Hover
        caja.hover(cambiaRojo,cambiaVerde);

        //Click, Doble Click
        caja.click(function(){
            $(this).css("background", "blue").css("color", "white");
        });

        caja.dblclick(function(){
            $(this).css("background", "pink").css("color", "yellow");
        });

        //Focus y Blur
        var nombre = $("#nombre");
        nombre.focus(function () {
            $(this).css("border", "2px solid green")
        });

        nombre.blur(function () {
            $(this).css("border", "1px solid #ccc");
            datos.show().text($(this).val()).css("display", "flex");
        });

        var datos = $("#datos");
        datos.css("text-align", "center").css("align-items", "center").css("justify-content", "center");


        //MouseDown y mouseUp
        datos.mousedown(function (){
            $(this).css("border-color", "gray");
        });

        datos.mouseup(function (){
            $(this).css("border-color", "black");
        });

        //MouseMove
        $(document).mousemove(function (){
            var sigueme = $("#sigueme");
            $('body').css("cursor", "none");
            console.log("En X:" + event.clientX);
            console.log("En Y:" + event.clientY);
            sigueme.css("left", event.clientX).css("top", event.clientY);
        });

    });    

