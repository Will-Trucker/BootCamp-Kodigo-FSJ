<?php
    function esPrimo($numero){
        if($numero < 2){
            return false; // Verificamos el numero si es menor que 2
        }

        for($i = 2; $i <= sqrt($numero); $i++){
            if($numero % $i == 0){
                return false;
            }
        }
        return true;
    }

    $numero = 29; // Cambiarlo a su preferencia

    if(esPrimo($numero)){
        echo "\n El $numero es primo ";
    } else {
        echo "\n El $numero no es primo ";
    }
?>