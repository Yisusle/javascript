'use_strcit'


$(document).ready(function(){ 
        console.log("jQuery y la web cargados.")
    });

    $(document).ready(function(){ 
        //Selector de ID
        var rojo = $("#rojo").css("background", "red").css("color", "white");
        console.log(rojo);

        var amarillo = $("#amarillo").css("background", "yellow").css("color", "green");
        console.log(amarillo);

        var verde = $("#verde").css("background", "green").css("color", "white");
        console.log(verde);

        //Selector de Clase
        var zebra_clase = $('.zebra').css("padding", "5px");


        $('.sin_borde').click(function(){
            console.log("Click dado!!");
            $(this).addClass('zebra');
        });
        console.log(zebra_clase.eq(1));
        console.log(zebra_clase[1]);

        //Selectores de etiqueta

        var parrafos = $('p').css("cursor", "pointer");
        parrafos.click(function(){
            var thiis = $(this);
            if(!thiis.hasClass('grande')){
                thiis.addClass('grande');
            }else{
                thiis.removeClass('grande');
            }
        });

        //Selectores de Atributo

        $('[title="Google"]').css("background", "#ccc");
        $('[title="Facebook"]').css("background", "lightBlue");

        //Find y parent

        $('p ,a').addClass('margen_superior');

        var busqueda = $("#elemento2").parent().parent().find('.resaltado');
        console.log(busqueda);

    });