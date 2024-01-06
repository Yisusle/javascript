'use strict'

//Transformación de textos

var numero = 444;
var texto1 = " Bienvenido al curso de JavaScript ";
var texto2 = "Muy buen curso";
/*
var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto2.toLowerCase();

console.log(dato);

//calcular longitud

var nombre = "Jesus";
//var nombre = ['Hola', 'Hola'];

console.log(nombre.length);

//Concatenar/ unir textos

//var texto_total = texto1 +" " +texto2;
var texto_total = texto1.concat(" ", texto2);
console.log(texto_total);
*/

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda = texto1.search("curso");
console.log(busqueda);

var busqueda = texto1.match("curso");
console.log(busqueda);

var busqueda = texto1.match(/curso/gi);
console.log(busqueda);

var busqueda = texto1.match(/curso/g);
console.log(busqueda);

//substr es obsoleto
var busqueda = texto1.substring(14,19);
console.log(busqueda);

var busqueda = texto1.charAt(30);
console.log(busqueda);


//Busca al principio del string
var busqueda = texto1.startsWith("Bi");
console.log(busqueda);

//Busca al final del string
var busqueda = texto1.endsWith("Script");
console.log(busqueda);

var busqueda = texto1.includes("curso");
console.log(busqueda);

//Reemplazar texto
var busqueda = texto1.replace("JavaScript", "Unreal");
console.log(busqueda);

//Separar el string
var busqueda = texto1.slice(14, 23);
console.log(busqueda);

//recortar las palabras y meterlas en un array por ejemeplo
var busqueda = texto1.split(" ");
console.log(busqueda);

//quita espacios adelante y atras
var busqueda = texto1.trim();
console.log(busqueda);