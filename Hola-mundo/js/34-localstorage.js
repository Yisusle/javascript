'use_strict'

window.addEventListener('load', ()=> {

//LocalStorage

/* Comprobar disponibilidad de LocalStorage 
    if(typeof(Storage) !== 'undefined'){
        console.log("LocalStorage Disponible.");
    }else{
        console.log("Incompatible con LocalStorage.");
    }
*/

//Guardar datos
localStorage.setItem("titulo", "Curso de Symfom")

//Recuperar elemento

localStorage.getItem("titulo");

console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos

    var usuario = {
        nombre:"Jesus Leyva",
        email:"Jesusle116@gmail.com"
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto
    /* */console.log(localStorage.getItem("usuario"));

    var userJs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userJs);
    document.querySelector("#datos").append(userJs.nombre +" - " + userJs.email);
    
//Limpiar
    localStorage.removeItem("usuario");
    localStorage.clear();

});