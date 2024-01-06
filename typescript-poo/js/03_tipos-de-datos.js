"use strict";
//String
//let cadena: string | number = "Jesus Leyva";
let cadena = "Jesus Leyva";
cadena = 40;
//Number
let numero = 23;
//Boleano
let verdadero_falso = true;
//Any
let cualquiera = "Hola";
//Arrays
var lenguajes = ["PHP", "JS", "CSS"];
let years = [10, 11, 12, 13, 14, 15];
//Let(Nivel de bloque) vs Var(Global)
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
