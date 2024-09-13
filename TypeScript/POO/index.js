// PROGRAMACIÓN ORIENTADA A OBJETOS
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
// Concepto Principales de POO -> Clases y Objetos
// Clases -> Molde para generar algo
var Auto = /** @class */ (function () {
    // Contructor -> Metodo Reservado para instanciar objetos
    function Auto(numChasisParam, motorParam, colorParam, tipoCompustibleParam, transmisionParam, plazasParam, frenosParam, modeloParam, añoFabParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCompustibleParam;
    }
    //Metodos -> Acciones
    Auto.prototype.encender = function () {
        console.log("BRUMRU");
    };
    Auto.prototype.apagar = function () {
        console.log("Chauchis");
    };
    return Auto;
}());
// Instanciar - Crear
var autito = new Auto(123456, "v8", "Azul", "Gasolina", "Manual", 2, "ABC", "Huayra", 2018);
console.log(autito);
// Asignamos una propiedad al objeto
// autotito.modelo = "Huayara";
// console.log(autotito)
