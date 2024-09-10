//Declaracion de variable en js
let variable = "";

//Declaración de variable + TIPO DE DATO TS
let cadenatexto:string = "Will";
let numero:number = 1;
let booleano:boolean = false;

//Declaracón de ARRAY
let arraycito: string[] = ["asd","asd","1234"];

let arrayNumero:number[] = [11,12,13,14,15.5];

// NUNCA UTILIZAR ESTO!!
let arrayMalo:any[] = ["asd",12,false]

// ARRAY NUMERICO CON STRING
// let arrayNumString:number[]|string[] = [""]
let arrayNumString:(number|string)[] = [12,123,123,123,123,123,123];
let arrayNumOString: number[]|string[] =[123,456,789.123];


// TIPO DE DATOS NUEVO - Declaracion de Duplas
// Duplas es un array con indices limitados y con su tipo de dato declarado previamente
let datosUsuario:[string,number]
datosUsuario = ["Willi",75];

// FUNCIONES en TS
function tipoVoid():void {
    console.log("Chauchis");
}

function sumar():number{
    return 2+2
}

function sumarOConcatenar():number|string{
    return 3+5;
}

function saludar( nombre:string ):string{
return `Hola como estas?  ${nombre}`
}

console.log(saludar("Will"));