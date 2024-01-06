'use_strict'

function cambiacolor(color){
    caja.style.background = color;
}
/*Con id concreto*/
//var caja = document.getElementById("caja");
var caja = document.querySelector("#caja"); // <--


caja.innerHTML = "Texto en la caja desde Js."
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "White";
caja.className = "hola hola2";

//Por su etiqueta
var todoslosDiv = document.getElementsByTagName("div");


//todoslosDiv.forEach(valor, index)  => {
    var valor;
    var seccion = document.querySelector("#miseccion");
    var hr = document.createElement("hr");
    for(valor in todoslosDiv){
        if(typeof todoslosDiv[valor].textContent == 'string'){
    
            var parrafo = document.createElement("p")
            var texto = document.createTextNode(todoslosDiv[valor].textContent);
            /*parrafo.appendChild(texto);
            document.querySelector("#miseccion").appendChild(parrafo);*/
            parrafo.append(texto);
            seccion.append(parrafo);
        }
    }
    seccion.append(hr);
//});

/*
//var contenidoTexto = todoslosDiv[2].textContent;
var contenidoTexto = todoslosDiv[2];
contenidoTexto.innerHTML = "Otro texto para el elemento con indice 2."
contenidoTexto.style.background = "Red";
*/
//Por su clase
var divRojos = document.getElementsByClassName('rojo');
var div;
for(div in divRojos){
    if(divRojos[div].className == "rojo"){
        divRojos[div].style.background = "Red";
    }
    
}

var divAmarillo = document.getElementsByClassName('amarillo');
divAmarillo[0].style.background = "Yellow";

//QuerySlector
var clases = document.querySelector(".hola2");
console.log(clases);

var id = document.querySelector("#miseccion");
console.log(id);

/* 
Para seleccionar muchos elementos existe el método querySelectorAll, te dejo una referencia por aquí:
https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll 
*/

//console.log(caja);
//console.log(todoslosDiv);
//console.log(contenidoTexto);