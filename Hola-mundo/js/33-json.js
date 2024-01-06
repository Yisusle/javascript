'use_strict'


window.addEventListener('load', ()=> {

    var pelicula = {
        Titulo: "Batman vs Superman",
        Year: 2017,
        Pais: "Estados Unidos"
    };

    var peliculas = [
        {Titulo: "La verdad duele",
        Year: 2016,
        Pais: "Francia Unidos"},
        pelicula
    ];

    pelicula.Titulo = "Superman Regresa";
    console.log(pelicula);
    console.log(pelicula.Titulo);
    console.log(peliculas);

    var caja_peliculas = document.querySelector("#peliculas"); 
    var index;
    for(index in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[index].Titulo + " - " + peliculas[index].Year);
        caja_peliculas.append(p);
    }
});