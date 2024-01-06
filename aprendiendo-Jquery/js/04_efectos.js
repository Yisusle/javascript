'use_strcit'

$(document).ready(function () {
    var caja = $("#caja");
    var btnMostrar = $("#mostrar");
    var btnOcultar = $("#ocultar");
    var Toggle = $('#todoenuno');
    var animar = $('#animar');

    btnMostrar.hide();

    btnMostrar.click(function() {
        btnMostrar.hide();
        btnOcultar.show();
        //caja.show('normal');
        //caja.fadeIn('slow');
        caja.fadeTo('fast', 1,function(){
            //caja.slideDown('slow');
            console.log("Cartel Mostrado.")
        });
        
    });

    btnOcultar.click(function() {
        btnOcultar.hide();
        btnMostrar.show();
        //caja.hide('fast');
        //caja.fadeOut('fast');
        caja.fadeTo('slow', 0, function(){
        //caja.slideUp('slow');
        console.log("Cartel Ocultado.")
        });
    });

    Toggle.click(function() {
        //caja.toggle('fast');
        //caja.fadeToggle('slow');
        caja.slideToggle('normal');
    });

    animar.click(function() {
        caja.animate({
            marginLeft: '500px', 
            fontSize: '40px', 
            height: 'auto'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '300px'
            } ,'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            } ,'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            } ,'slow')
            .animate({
                marginLeft: '500px', 
                fontSize: '40px', 
                height: 'auto'
                }, 'slow'); 
    });
});