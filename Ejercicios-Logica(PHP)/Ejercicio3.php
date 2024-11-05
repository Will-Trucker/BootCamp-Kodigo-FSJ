<?php 
    function esPalindromo($cadena){
        // Se eliminan los espacios y se convierte la cadena a minusculas
        $cadena = strtolower(str_replace(' ','',$cadena));

        // se invierte la cadena
        $cadenaInvertida = strrev($cadena);

        // comparacion la cadena original con la invertida
        return $cadena === $cadenaInvertida;
    }

    $texto = "Y tu crees que se le descargo el phone";
    if(esPalindromo($texto)){
        echo "\"$texto\" es un palindromo ";
    } else {
        echo "\"$texto\" no es un palidromo";
    }
?>