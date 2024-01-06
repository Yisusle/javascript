'use strict'

/*Que nos diga si un numero es par o impar con promt*/

var numero = parseInt(prompt("Introduce un numero:" ,0));

while(isNaN (numero)){
    numero = parseInt(prompt("Introduce un numero:" ,0));
}

if(numero % 2 == 0){
    alert("Es un numero par.");
}else{
    alert("Es un numero inpar.");
}