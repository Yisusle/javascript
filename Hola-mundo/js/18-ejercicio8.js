'use strict'

/* calculadora que pida dos numeros*/


var numero1 = parseInt(prompt("Introduce el primer numero:" ,0));
var numero2 = parseInt(prompt("Introduce el segundo numero:" ,0));

while( numero1 <=0 || numero2 <=0 ||isNaN(numero1) || isNaN(numero2) ){
    alert("Introduce numeros validos.");
    
    numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

var resultado = "La suma es: " +(numero1 + numero2) +"<br>"
                +"La resta es: " +(numero1 - numero2) +"<br>"
                +"La multiplicación es: " +(numero1 * numero2) +"<br>"
                +"La división es: " +(numero1 / numero2) +"<br>";

var resultadoCMD = "La suma es: " +(numero1 + numero2) +"\n"
                +"La resta es: " +(numero1 - numero2) +"\n"
                +"La multiplicación es: " +(numero1 * numero2) +"\n"
                +"La división es: " +(numero1 / numero2) +"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);