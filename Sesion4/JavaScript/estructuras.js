//Estructuras de CONTROL -> CONDICIONALES

//IF -> EVALUA CASOS VERDADEROS
//IF ELSE -> EVALUAR CASOS VERDADEROS Y FALSOS

let condicion = 10 === "10";

if(condicion){
    console.log("ESTE CODIGO SE EJECUTA EN CASO TRUE");
} else{
    console.log("ESTE CODIGO SE EJECUTA SI ES FALSE");
}

/*  OPERADORES DE COMPARACION NUMERICOS
    MAYOR QUE  >
    MENOR QUE <
    MENOR O IGUAL <=
    MAYOR O IGUAL >=
*/

if( 10 <= 10){
    console.log("Afirmativo");
}else{
    console.log("Negativo");
}


// Operador Ternario -> REEMPLAZO DE SINTAXIS PARA EL IF ELSE
// CONDICION ? CODIGO TRUE : CODIGO FALSE

10 < 10 ? console.log("Afirmativo") : console.log("Negativo");

//IF ELSEIF 
let variableAux = 15 ;
//Preguntamos si es mayor
if(variableAux>10){
    console.log("Afirmativo");
    //Realizamos una repregunta
}else if(variableAux>5){
    //Ejecutar otro codigo de true
    console.log("Si es mayor");
}else{
    console.log("No cumplio las espectativas");
}


if( variableAux>10 || variableAux>5){
    console.log("Esta es la respuesta true");
}else {
    console.log("Esta es la respuesta false");   
}

let cadena = " jairo@gmail.com";

if("jairo@gmail.com" === cadena.trim()){
    console.log("Es true");
} else {
    console.log("Es Falso");
}


// Estructuras Repetitivias

// WHILE -> MIENTRAS
let numero = 1;
// while(condicion){
//     console.log(numero);
//     numero++;
// }

// do{
//     console.log(numero);
//     numero++;
// } while (numero < 10 && numero >= 2){

// }


// For
for(let numero = 1; numero < 10; numero++){
    console.log(numero);
}


//ARRAY
let cohorteFSJ25 = [
    "Erick","Isis","Guille","Bryan","Eduador","Karla","Claudia","Jared",23
];
console.log(cohorteFSJ25);


let variableCompleja = [];
variableCompleja.push("Jairo");
variableCompleja.push(26)
variableCompleja.push("Guille");
console.log(variableCompleja);

// Elimina el valor de array final

let datoEliminado = variableCompleja.pop()
console.log(variableCompleja);
console.log(datoEliminado);

// Agregar un valor al inicio del array
variableCompleja.unshift("Jorge");
console.log(variableCompleja);

// Eliminar un valor al inicio del array
let datoEliminadoPrincipio = variableCompleja.shift()
console.log(variableCompleja);
console.log(datoEliminado);

//PROPIEDAD ARRRAY 
// Averiguar el largo de un array
console.log("------------LARGO DEL ARRAY------------");
let longanismo = variableCompleja.length; 
console.log(longanismo);