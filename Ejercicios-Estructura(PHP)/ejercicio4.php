<?php 
    function bucleAnidado(){
        $filas = 5;
        // Bucle externo
        for ($i=1; $i <= $filas ; $i++) { 
            // Bucle interno
            for($j = $i; $j < $filas; $j++){
                echo " "; // Imprimir espacios
            } 

            // Para asterisco
            for($k = 1; $k <= (2 * $i - 1); $k++){
                echo "*";
            }

            echo "\n";
        }
    }

    bucleAnidado();
?>