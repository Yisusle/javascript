'use_strict'

window.addEventListener('load', ()=> {

    var fecha = new Date();

    var año = fecha.getFullYear();
    var mes = fecha.getMonth();
    var día = fecha.getDate();
    var hora = fecha.getHours();
    var minutos =fecha.getMinutes();

    var texto_hora = `
    El año es: ${año},
    El mes es: ${mes},
    El día es: ${día},
    La hora es: ${hora}:${minutos}
    `;
    console.log(fecha);
    console.log(texto_hora);
    console.log(Math.ceil(Math.random()*1000));

});