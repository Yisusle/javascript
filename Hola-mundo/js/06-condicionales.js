'use strict'
//CONDICIONALES

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad 1 es mayor que Edad 2");
}else{
    console.log("Edad 2 es mayor que Edad 1");
}


var edad = 19;
var nombre = "David Lopez";
//!=

if(edad >=18){
    console.log(nombre + " tiene " +edad+ " años."+ " Eres mayor de edad.");

    if(edad <= 39){
        console.log("Todavía eres joven.");
    }else if(edad >= 40){
        console.log("Ya no eres joven.");
    }
}else{
    console.log(nombre + " tiene " +edad+ " años."+ " Eres menor de edad.");
}

/*OPERADORES LOGICOS 
AND &&
OR ||
NOT !
*/

// NOT
var year = 2028;
if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}

//AND
if(year >= 2000 && year <=2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year ==2028) ){
    console.log("El año acaba en 8");
}else{
    console.log("El año NO acaba en 8");
}

