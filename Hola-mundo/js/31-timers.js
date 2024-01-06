'use_strict'

//Para evitar error de cargar el scrip al principio y no ponerlo al final el script
//window.addEventListener('load', ()=> {
    //Utilizando sin metodo flecha.
window.addEventListener('load', function(){

//Funcion Timer con start,stop.
        function intervalo(){
            //var tiempo = setInterval(function(){
            //Utilizando metodo flecha
        var tiempo = setInterval(()=>{
            console.log("Set Interval ejecutado");

            var encabezado = document.querySelector("H1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px"
            }else{
                encabezado.style.fontSize = "50px"
            }
        }, 5000);

        return tiempo;

    }

        var tiempo = intervalo();

    //Timers

    //No va a estar en bucle.
    /*
    var tiempo = this.setTimeout(function(){
        console.log("Set Interval ejecutado");

        var encabezado = document.querySelector("H1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px"
        }else{
            encabezado.style.fontSize = "50px"
        }
    }, 5000);
*/
/*
    //Va a estar en bucle.
    //var tiempo = setInterval(function(){
        //Utilizando metodo flecha
    var tiempo = setInterval(()=>{
        console.log("Set Interval ejecutado");

        var encabezado = document.querySelector("H1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px"
        }else{
            encabezado.style.fontSize = "50px"
        }
    }, 5000);
*/
    var stop = document.querySelector("#stop");

    //stop.addEventListener("click", function(){
        //Utilizando metodo flecha.
    stop.addEventListener("click", ()=>{
        alert("Haz parado el intervalo en bucle.");
        clearInterval(tiempo);
    });


    var start = document.querySelector("#start");

    //start.addEventListener("click", function(){
        //Utilizando metodo flecha.
    start.addEventListener("click", ()=>{
        alert("Haz iniciado el intervalo en bucle.");
        intervalo();
    });
});