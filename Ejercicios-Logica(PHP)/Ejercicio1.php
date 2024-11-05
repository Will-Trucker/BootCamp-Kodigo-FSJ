<?php
    function fibonaci($numero){
        $fibonacci = [];

        // Funcion para verificar los numeros sean positivos

        if($numero <= 0){
        return "\n Ingrese un numero positivo";
        }

        // Funciones
        for ($i=0; $i < $numero; $i++) { 
            if($i == 0){ // 1er termino
                $fibonacci[] = 0; 
            } elseif($i == 1) { // 2do termino
                $fibonacci[] = 1; 
            } else { // Cada termino es la suma de los dos anteriores
                $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2]; 
            }
        }

        return $fibonacci;
    }


    $numero = 5; // Cantidad de terminos a utilizar
    $resultado = fibonaci($numero); 
    echo "Los primeros $numero términos de la serie Fibonacci son:" . implode(", ",$resultado);
?>