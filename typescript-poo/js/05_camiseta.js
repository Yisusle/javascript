"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decoraciones
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
let Camiseta = 
//Clase (molde del objeto)
class Camiseta {
    //Metodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
};
Camiseta = __decorate([
    estampar('Gucci Gang')
    //Clase (molde del objeto)
], Camiseta);
//Clase hija(Herencia)
class Sudadera extends Camiseta {
    constructor() {
        super(...arguments);
        //para que no de error lo defino en false
        this.capucha = false;
    }
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
var camiseta = new Camiseta("rojo", "Manga Larga", "Nike", "M", 800);
camiseta.setColor("Rojo");
//camiseta.getColor;
camiseta.estampacion();
var playera = new Camiseta("azul", "Manga Corta", "Adidas", "M", 600);
playera.setColor("Azul");
var sudadera_Nike = new Sudadera("Azul", "Manga Larga", "Under Armor", "M", 1200);
sudadera_Nike.setCapucha(true);
sudadera_Nike.setColor("Verde");
console.log(camiseta, playera);
console.log(sudadera_Nike);
