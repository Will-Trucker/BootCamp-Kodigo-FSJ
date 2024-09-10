//Declaracion de variable en js
var variable = "";
//Declaración de variable + TIPO DE DATO TS
var cadenatexto = "Will";
var numero = 1;
var booleano = false;
//Declaracón de ARRAY
var arraycito = ["asd", "asd", "1234"];
var arrayNumero = [11, 12, 13, 14, 15.5];
// NUNCA UTILIZAR ESTO!!
var arrayMalo = ["asd", 12, false];
// ARRAY NUMERICO CON STRING
// let arrayNumString:number[]|string[] = [""]
var arrayNumString = [12, 123, 123, 123, 123, 123, 123];
var arrayNumOString = [123, 456, 789.123];
// TIPO DE DATOS NUEVO - Declaracion de Duplas
// Duplas es un array con indices limitados y con su tipo de dato declarado previamente
var datosUsuario;
datosUsuario = ["Willi", 75];
// FUNCIONES en TS
function tipoVoid() {
    console.log("Chauchis");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 3 + 5;
}
function saludar(nombre) {
    return "Hola como estas?  ".concat(nombre);
}
console.log(saludar("Will"));
