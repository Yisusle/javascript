'use_strict'



//Para evitar error de cargar el scrip al principio y no ponerlo al final el script
window.addEventListener('load', ()=> {

//Eventos del ratón.
    function cambiarColor(){
        console.log("Me has dado click.")
    
        var bg = boton.style.background;
    
        if (bg === "green") {
            boton.style.background = "red";
            
        } else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px"
        boton.style.border = "1px solid #ccc";
    
        return true;
    }
    
    
    var boton = document.querySelector("#boton");
    
        //Click
        boton.addEventListener('click', function () {
            cambiarColor();
            //30
            console.log(this);
            this.style.border = "5px solid Black";
        });
    
        //Mouse Over
        boton.addEventListener('mouseover', function(){
            boton.style.background = "Yellow";
        });
    
        //Mouse Out
        boton.addEventListener('mouseout', function(){
            boton.style.background = "#ccc";
        });
    
        //Focus
        var input = document.querySelector("#campo_nombre");
    
        input.addEventListener('focus', function(){
            console.log("Estas dentro del input.[Focus]");
        });
            
        //Blur
        input.addEventListener('blur', function(){
            console.log("Estas fuera del input.[Blur]");
        });
    
        //Keydown
        input.addEventListener('keydown', function(event){
            console.log("Estas puldando una tecla.[Keydown] : ",  String.fromCharCode(event.keyCode));
        });
    
        //keyPress
        input.addEventListener('keypress', function(event){
            console.log("Tecla presionada.[KeyPress] : ",  String.fromCharCode(event.keyCode));
        });
    
        //KeyUp
        input.addEventListener('keyup', function(event){
            console.log("Tecla Soltada.[KeyUp] : ",  String.fromCharCode(event.keyCode));
        });



});


