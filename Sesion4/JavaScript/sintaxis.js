console.log("Holis estoy imprimiendo en la consola");

/* Operaciones Matematicas */
let suma = 2+2;
let resta = 2-2;
let division = 135/5;
let multiplicacion = 1354*356;
let residuo = 10%2;

console.log(suma);

// Concatenacion -> UNIR DOS VARIABLES (String)
let sumaFalsa =  2 +"2";

console.log(sumaFalsa);

// *** Operadores Logicos
// Ejecutamos Operaciones

let igualdad = 10 == "10";
console.log(igualdad);

// Igualdad Estricta === COMPARA EL VALOR DE LAS COSAS Y TIPO DE DATO
let igualdadEstricta = 10 === 10;
console.log(igualdadEstricta);

// Desigualdad
let desigualdad = 10 != "10";
console.log(desigualdad)

// Desigualdad Estricta !=== COMPARAMOS SI LOS VALORES Y EL TIPO DE DATOS SON DIFERENTES
let desigualdadEstricta = 10 !== "10" 
console.log(desigualdadEstricta);

// PARA QUE EL OPERADOR AND ME DE TRUE AMBAS COMPARACIONES TIENE QUE DAR TRUE
let operadorAND = 10 == "10" && 10 === "10";
console.log(operadorAND);

let operardorOR = 10 == "10" || 10 === "10";
console.log(operardorOR);

// FUNCIONES
// Una funcion es una porcion de codigo que hace algo en correcto

// Declaraciones de Funcion
// Expresada Tipo de Declaracion de Funcion 


// De
// function PALABRA RESERVADA NECESARIA PARA DECLARAR LA FUNCION
// () Sirve para declarar la funcion 
// {} Delimitadores del codigo de la funcion
function nombreFuncion(){
    console.log("Hola te saludo de la funcion");
}

//nombreFuncion();

// Tipo Void
// TIPO VOID -> Vacia 

function tiposVoid(){
    console.log("Soy una funcion tipo VOID");
}

//tiposVoid();

// Tipo Return -> Devuelven un valor
function tipoReturn(){
    return "soy una funcion tipo return";
}

//console.log(tipoReturn());

let ejecucion1 = tiposVoid();
let ejecucion2 = tipoReturn();
console.log(ejecucion1);
console.log(ejecucion2);

/* 
CONSTANTE nombreFuncion asignamos parametros flecha llaves CODIGO A EJECUTAR
const funcionFlecha = () => { log() }
*/

const funcionFlecha = (num1, num2) => {
    return num1 - num2;
}

function funcionCallback(funcion){
    funcion();
}

function funcionAuxiliar(){
    console.log("Estoy funcionando desde el callback");
}

funcionCallback(funcionAuxiliar);

//Callback con funcionFlecha ANONIMA
funcionCallback( () => { console.log("Te saludo desde la funcion flecha anonima jeje saludos");
});

funcionCallback(function () { console.log(
    "Holiwis desde la funcion anonima expresada");
})
