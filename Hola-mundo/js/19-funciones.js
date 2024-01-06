'use strict'

//Funciones
/* Es una agrupación reutilizable de un conjunto  de instrucciones */

//Defino la función

/*function calculadora(numero1, numero2, mostrar = false){
    //Instrucciones
    //console.log("Hola soy la calculadora");
    //console.log("Si soy yo");
    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicación: " + (numero1*numero2));
        console.log("Divición: " + (numero1/numero2));
        console.log(mostrar);
        console.log("*********************************");
    }else{
        document.write("Suma: " + (numero1+numero2) +"<br>");
        document.write("Resta: " + (numero1-numero2) +"<br>");
        document.write("Multiplicación: " + (numero1*numero2) +"<br>");
        document.write("Divición: " + (numero1/numero2) +"<br>");
        document.write(mostrar +"<br>");
        document.write("*********************************" +"<br>");
    }
    //return("Hola soy la calculadora");
}
*/

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("Divición: " + (numero1/numero2));
    console.log("*********************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2) +"<br>");
    document.write("Resta: " + (numero1-numero2) +"<br>");
    document.write("Multiplicación: " + (numero1*numero2) +"<br>");
    document.write("Divición: " + (numero1/numero2) +"<br>");
    document.write("*********************************" +"<br>");
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    //return("Hola soy la calculadora");
}


//Invocar o llamar a la función.

//console.log(calculadora());

//calculadora(12,8);

var resultado = calculadora;
//console.log(resultado(2, 5, true));

resultado(2,5, true);

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8)
}*/

