// PROGRAMACIÓN ORIENTADA A OBJETOS
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

// Concepto Principales de POO -> Clases y Objetos
// Clases -> Molde para generar algo
class Auto{
    // Caracteristicas
    numChasis:number;
    motor:string
    color:string
    tipoCombustible:string;
    transmision:string;
    cantKilimetro:string;
    plazas:number;
    frenos:string;
    modelo:string;
    añoFab:number;

    // Contructor -> Metodo Reservado para instanciar objetos
    constructor(numChasisParam:number,motorParam:string,colorParam:string,tipoCompustibleParam:string, transmisionParam:string,plazasParam:number,frenosParam:string, modeloParam:string, añoFabParam:number){
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCompustibleParam;
    }
 
    //Metodos -> Acciones
    encender():void{
        console.log("BRUMRU");
    }

    apagar():void{
        console.log("Chauchis")
    }

}

// Instanciar - Crear
let autito:Auto = new Auto(123456,"v8","Azul","Gasolina","Manual",2,"ABC","Huayra",2018);
console.log(autito);

// Asignamos una propiedad al objeto
// autotito.modelo = "Huayara";
// console.log(autotito)

