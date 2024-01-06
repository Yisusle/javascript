'use_strict'

window.addEventListener('load', ()=>{
    console.log("DOM cargado.");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    formulario.addEventListener('submit', ()=>{
        console.log("Evento submit capturado.");

            var nombre = document.querySelector("#nombre").value;
            var apellidos = document.querySelector("#apellidos").value;
            var edad = parseInt(document.querySelector("#edad").value);

                if(nombre.trim() == null || nombre.trim().length == 0){
                    alert("El Nombre no es valido.");
                    document.querySelector("#error_nombre").innerHTML = "El nombre no es valido.";
                    document.querySelector("#error_nombre").style.color = "Red";
                    return false;
                }else{
                    document.querySelector("#error_nombre").style.display = "none";
                }

                if(apellidos.trim() == null || apellidos.trim().length == 0){
                    alert("Los Apellidos no son valido.");
                    document.querySelector("#error_apellidos").innerHTML = "Los Apellidos no son validos.";
                    document.querySelector("#error_apellidos").style.color = "Red";
                    return false;
                }else{
                    document.querySelector("#error_apellidos").style.display = "none";
                } 
                              //Dos formas isNaN(edad) == false
                if(edad == null || edad <= 0 || isNaN(edad)){
                    alert("La Edad no es valida.");
                    document.querySelector("#error_edad").innerHTML = "La Edad no es valida.";
                    document.querySelector("#error_edad").style.color = "Red";
                    return false;
                }else{
                    document.querySelector("#error_edad").style.display = "none";
                } 

                box_dashed.style.display = "block";

            console.log(nombre, apellidos, edad);

            var p_nombre = document.querySelector("#p_nombre span");
            var p_apellidos = document.querySelector("#p_apellidos span");
            var p_edad = document.querySelector("#p_edad span");

            p_nombre.innerHTML = nombre;
            p_apellidos.innerHTML = apellidos;
            p_edad.innerHTML = edad;

            /*
            var datos_usuario =[nombre, apellidos, edad];

            var indice;
            for(indice in datos_usuario){
                var parrafo = document.createElement("p");
                    parrafo.append(datos_usuario[indice]);
                    box_dashed.append(parrafo);
            } */
    });




    var estilosCajas = document.querySelector('.box');
    estilosCajas.style.width = "200px";
    estilosCajas.style.float= "left";
    estilosCajas.style.margin = "20px";

    var estiloCajaDashed = document.querySelector(".dashed");
    estiloCajaDashed.style.width = "200px";
    estiloCajaDashed.style.float= "left";
    estiloCajaDashed.style.margin = "20px";
    estiloCajaDashed.style.display = "none";
    estiloCajaDashed.style.border = "3px dashed black";
    estiloCajaDashed.style.height = "250px";
    estiloCajaDashed.style.padding = "5px";
});