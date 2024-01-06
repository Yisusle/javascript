"use strict";
//import { Camiseta } from "./05_camiseta";
class Main {
    constructor() {
        console.log("Aplicación JS cargada.");
    }
    getCamiseta() {
        return new Camiseta("rojo", "Manga Larga", "Nike", "M", 800);
    }
}
var main = new Main();
