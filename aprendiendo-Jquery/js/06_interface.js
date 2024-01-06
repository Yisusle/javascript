'use_strcit'

$(document).ready(function () {
    
    var elemento = $('.elemento');
    
    // Mover elemento por la pagina
    elemento.draggable();
    
    // Redimensionar 
    elemento.resizable();

    //Seleccionar lista
    var lista = $('.lista-seleccionable');
    //lista.selectable(); 
    lista.sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista.");
        }
    });

    //Drop
    $('#elemento-movido').draggable();

    $('#area').droppable({
        drop: function () {
            console.log("Haz soltado algo dentro del area.");
        }
    });

    //Efectos
    $('#mostrar').click(function () {
        //jq
        //$('.caja-efectos').fadeToggle();
        //jq-ui
        //$('.caja-efectos').toggle("fade");
        //$('.caja-efectos').effect("explode");
        //$('.caja-efectos').toggle("explode");
        //$('.caja-efectos').toggle("slide");
        //$('.caja-efectos').toggle("blink");
        //$('.caja-efectos').toggle("drop");
        //$('.caja-efectos').toggle("fold");
        //$('.caja-efectos').toggle("puff");
        //$('.caja-efectos').toggle("escale", "slow");
        $('.caja-efectos').toggle("shake",{} , 4000);
    });

    //ToolTips
    //$(document).tooltip();
    $('.Tooltips').tooltip();

    //Dialog
    $('#lanzar-popup').click(function () {
        $('.popup').dialog();
    });

    //Datepicker
    $('#calendario').datepicker();

    //Tabs
    $('#pestanas').tabs();
});