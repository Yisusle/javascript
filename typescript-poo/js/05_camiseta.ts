//Interfaz
interface CamisetaBase{
    setColor(color:string):void; //Porque aqui esta vacio(void)
    getColor():string;
}

//Decoraciones
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function ():void{
            console.log("Camiseta estampada con el logo de: " +logo);
        }
    }
}

@estampar('Gucci Gang')

//Clase (molde del objeto)
class Camiseta implements CamisetaBase{
    //esto es para que no de error el estampacion.
    [x: string]: any;
    //Propiedades (Caracteristicas del objetos)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (Funciones o acciones del objeto)
    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    

    public setColor(color: string){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

//Clase hija(Herencia)

class Sudadera extends Camiseta{
                            //para que no de error lo defino en false
    public capucha: boolean = false;
    

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}



var camiseta = new Camiseta("rojo", "Manga Larga", "Nike", "M", 800);
camiseta.setColor("Rojo");
//camiseta.getColor;

camiseta.estampacion();

var playera = new Camiseta("azul", "Manga Corta", "Adidas", "M", 600);
playera.setColor("Azul");

var sudadera_Nike = new Sudadera("Azul", "Manga Larga", "Under Armor", "M" , 1200);
sudadera_Nike.setCapucha(true);
sudadera_Nike.setColor("Verde");


console.log(camiseta, playera,);
console.log(sudadera_Nike);