<?php
// Imprimir datos
echo "Hola mundo \n";
print "Holiwis desde print \n";

// Variables
// Inicializar una variable
$nombre;
$nombre = "Jairo";
$apellido = "Vega Romero";
$string = "Cadena de texto";
$boolean = true;
$numero = 10;
$decimal = 7.5;

// Template String
$template = "${nombre} ${apellido}";
print($template);




// Operador Matematico
$suma = $numero + $decimal;
$resta = $numero - $decimal;
$multiplicacion = $numero * $decimal;
$division = $numero / $decimal;
$residuo = $numero % $decimal;

// Operadores Comparacion
$igualdad;

// FUNCIONES
// FUNCIONES EXPRESADAS
function Saludar(){
    print("Holiwis \n");
}

function Despedir(){
    return("Chauchis \n");
}

$resultado = Saludar();
$resulta2 = Despedir();
print("Este es el resultado: {$resultado} \n");


// FUNCIONES ANONIMAS
$funcioncita = function(){print("Soy anonima jeje");};

// FUNCIONES FLECHA
$flechita = fn() => (print("Soy una funcion anonima flechita jejejiji"));



?>

