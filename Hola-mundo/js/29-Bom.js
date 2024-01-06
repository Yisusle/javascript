'use_strict'

// Es el Browser Object Model

function getBoom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.location);
    console.log(window.location.href);
}
function getBoom2(){
    console.log(screen.height);
    console.log(screen.height);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"" ,"width=400, height=300");
}
getBoom();
getBoom2();