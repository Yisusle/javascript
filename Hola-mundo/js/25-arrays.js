'use strict'

//Arrays/ arreglos, matrices

var nombre = "Jesus Leyva"

var nombres = ["Jesus Leyva", "Juan Lopez", "Martín Lopez", "Sergio Garcia" ,52, true];

var lenguajes = new Array("PHP", "JS", "C++", "Java", "C#")

//console.log(nombres[0]);
//console.log(nombres.length);

/*
var elemento = parseInt(prompt("Que elemento quieres?",0));
if(elemento >= nombres.length){
    alert("Introduce el numero correco menor que " +nombres.length +".");
}else{
alert("El usuario seleccionado es: " +nombres[elemento] +".");
}
*/
    document.write("<h1>Lenguajes de programación</h1>")

    document.write("<ul>"); 
/*
    for(var i = 0; i < lenguajes.length; i++){
        document.write("<li>" +lenguajes[i] +"</li>");
    }
*/   
    //Metodo forEach    
    //index y dato no seria necesario, al menos que lo utilizaramos a futuro, "solo con elemento funciona".
    lenguajes.forEach((elemento, index, dato)=>{
        console.log(dato);
        document.write("<li>" +index + " - " +elemento +"</li>");
    });

    document.write("<br>");

    //For in
    for(let lenguaje in lenguajes){
        document.write("<li>" +lenguaje +" - "+lenguajes[lenguaje] +"</li>");
    }
    document.write("</ul>");


    //Busquedas

    var busqueda = lenguajes.find(function(lenguaje){
        return lenguaje == "PHP"
    });

    //Metodo flecha
    var busqueda_flecha = lenguajes.find(lenguaje => lenguaje == "PHP");
    
    //Buscar Index
    var busqueda_indice = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

    var precios = [10, 20, 50 , 80, 12];
    var busqueda_indice =  precios.some(precio => precio >= 80);

    console.log(busqueda);
    console.log(busqueda_flecha);
    console.log(busqueda_indice);

