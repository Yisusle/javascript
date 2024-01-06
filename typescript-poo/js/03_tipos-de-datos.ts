type alfanumerico = string | number;

//String
//let cadena: string | number = "Jesus Leyva";
let cadena: alfanumerico = "Jesus Leyva";

cadena = 40;

//Number
let numero: number = 23;

//Boleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "Hola";

//Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: number[] = [10, 11, 12, 13, 14, 15];

//Let(Nivel de bloque) vs Var(Global)
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);