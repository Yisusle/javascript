'use_strcit'

var bicicleta ={
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'De Disco',
    velociadadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color;
        this.color = nuevo_color;
        console.log(this);
    }
};   

bicicleta.cambiaColor("Azul");