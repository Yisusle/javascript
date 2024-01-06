'use_strcit'

$(document).ready(function () {
    reloadLinks();

    console.log($('a').length); 

    var añadir = $("#addBtn");
    var link = $("#add_link");

    añadir.removeAttr('disabled');

    añadir.click(function(){
        //Comprobando que si lo esta capturando.
        console.log("Capturado(val): " +link.val());
        
                 //Escribiendolo en el html.   
                 //.html - me borra los demas al añadir el nuevo.
                //prepend: lo agrega al principio de la lista. before: lo agrega fuera de la lista. after:lo agrega despues/final y fuera de la lista.
        $('#menu').append('<li><a href=" ' +link.val()+ '"></a></li>');
        //para borar despues de dar click al botón
        link.val('');

        console.log("AÑADIDO");
        //Recargar para añadir el nuevo.
        reloadLinks();
    });

});

function reloadLinks () {

    $('a').each(function (index){
        var that = $(this);
        console.log(that);
        
        var enlace = that.attr("href");
        console.log("href: " + enlace);
        that.attr('target', "_blank")

        that.text(enlace);
    });
}