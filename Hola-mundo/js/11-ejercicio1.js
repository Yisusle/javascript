'use strict'

//Programa que pida dos numeros y cual es el mayor y le menos y si son iguales.
//PLu: Si los nuemros no son un numero o son menores o iguales a 0, que vuelva a pedir los numeros

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

console.log(numero1, numero2);

while( numero1 <=0 || numero2 <=0 ||isNaN(numero1) || isNaN(numero2) ){
    alert("Introduce numeros validos.");
    
    numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

if(numero1 == numero2){
    alert("Los numeros son iguales.")
}else if(numero1 > numero2){
    alert("El Numero Mayor es el: " + numero1);
    alert("El numero Menor es: " + numero2);
}else if(numero2 > numero1){
    alert("El Numero Mayor es el: " + numero2);
    alert("El numero Menor es: " + numero1); 
}else
alert("Introduce numeros validos.");

