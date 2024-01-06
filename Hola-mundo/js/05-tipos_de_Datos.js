'use strict'
//OPERADORES
var numero1 = 7;    
var nuemero2 = 12;
var operacion = numero1 + nuemero2; 
//var operacion = numero1 - nuemero2;
//var operacion = numero1 * nuemero2;
//var operacion = numero1 / nuemero2;   

alert("El Resultado de la Operación es: " + operacion);

//TIPOS DE DATOS

var numero_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_falso = true;

var numero_falso = "33";

console.log(Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7.5);
console.log(numero_entero + ' Texto concatenado');

console.log(String(numero_entero) + 5);


console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);
console.log(typeof numero_falso);