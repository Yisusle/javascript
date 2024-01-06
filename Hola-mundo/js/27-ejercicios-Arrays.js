'use_strict'

/*
1.Pida 6 numeros y lo ponga en un array.
2.Mostrar todos los elementos del array en el cuerpo de la pagina y la consola.
3.Ordenar y mostrarlo.
4.Invertir el orden y mostrarlo.
5.Mostrar cuantos elementos tiene el arry.
6.Hacer una busqueda  de un valor introducido por el usuario y que diga si esta en el array y su posicio(indice).
*/

function mostar_array(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array " +textoCustom +"</h1>")
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{document.write("<li>" +elemento +"</li>");});
    document.write("</ul>");
};
        

//Pedir 6 numeros
//var numeros = new Array(6);
var numeros = [];
for(i = 1; i <=6; i++){
    //numeros[i] = parseInt(prompt("Introduce el numero " +[i]+":", 0));
    numeros.push(parseInt(prompt("Introduce el numero " +[i]+":", 0)));
}

//Mostrar array
mostar_array(numeros);
console.log(numeros);

//Ordenar
numeros.sort(function(a, b){return a-b});
console.log(numeros);
mostar_array(numeros, "Ordenado");

//Invertir
numeros.reverse();
console.log(numeros);
mostar_array(numeros, "Revertido");

//Cuantos Elementos tiene el array
document.write("<h1>El Array tiene " +numeros.length +" elementos</h1>");

//Busqueda

var busqueda = parseInt(prompt("Busca un numero: ", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1 ){
    document.write("<hr/><h1>Encontrado" +"</h1>");
    document.write("<h1>Posición de la busqueda: " +posicion +"</h1><hr/>");
    console.log(posicion);
}else{
    document.write("<h1><hr/>No se ha encontrado.</h1><hr/>");
    console.log(posicion);
}

