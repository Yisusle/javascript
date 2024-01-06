'use_strict'

window.addEventListener('load', ()=> {

    var formularioA = document.querySelector("#formAddpeliculas");

    formularioA.addEventListener('submit', ()=>{
        var titulo = document.querySelector("#addpelicula").value;
        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);
        }
    });

    var ul = document.querySelector("#peliculas_lista");
    for (var i in localStorage){
        console.log(localStorage[i]);

        //Para mostrarlo en la pagina.
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("li");
            //Creando el li
            ul.append(li);
            //Mostrando
            li.append(localStorage[i]);
            
        }
    }

    var formularioB = document.querySelector("#formDelpeliculas");

    formularioB.addEventListener('submit', ()=>{
        var titulo = document.querySelector("#delpelicula").value;
        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
        }
    });
});