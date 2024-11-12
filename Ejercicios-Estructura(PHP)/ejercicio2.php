<?php
    function sumaPar($array){
        $suma = 0;

        foreach($array as $numero){
            if($numero % 2 == 0){
                $suma += $numero;
            }
        }
        return $suma;
    }

    $numeros = [1,2,3,4,5,6,7,8,9,10];
    $sumaPar = sumaPar($numeros);

    echo "La suma de los numeros pares son " . $sumaPar;
?>