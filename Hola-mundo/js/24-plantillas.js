'use strict'

//Plantillas de texto

var nombre = prompt("Escribe tu Nombre: ");
var apellido = prompt("Escribe tus Apellidos: ");

//var texto = "Mi nombre es: " +nombre + " Mis apellidos son: " +apellido;
var texto = `
<h1>Hola que tal</h1>
<h3>Mi Nombre es: ${nombre}</h3>
<h3>Mis Apellidos son: ${apellido}</h3>
`;
document.write(texto);