'use strict'

//Son arrays dentro de otro

var categoraia = ["Acción", "Terror", "Comedia"];
var peliculas = ["Rapidos y furiosos", " Anabell ", " Son como niños"];

var cine = [categoraia, peliculas];
//Ordenar
/*peliculas.sort();
peliculas.reverse();*/

console.log(peliculas);

console.log(cine[0][2]);
console.log(cine[1][2]);

/*
var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}
while(elemento!= "ACABAR");
    peliculas.pop();
    //peliculas[0] = undefined;

peliculas.push("Batman como yo le encontre");
peliculas.push = "Batman como en el video";
*/

var indice = peliculas.indexOf("Anabell");
//console.log(indice);
if (indice > -1){
    peliculas.splice(indice, 1);
}
    
    var peliculas_string = peliculas.join();

    var cadena = "Texto 1, Texto 2, Texto 3";
    var cadena_array = cadena.split(",");
    
    console.log(cadena_array);
    console.log(peliculas_string);