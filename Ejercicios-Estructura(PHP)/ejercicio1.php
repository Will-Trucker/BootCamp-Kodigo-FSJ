<?php 
    function invertirLista($array){
        return array_reverse($array);
    }


    // uso

    $num = [1,2,3,4,5];
    $invNum = invertirLista($num);

    echo "Lista original: ";
    print_r($num);
    echo "Lista invertida: ";
    print_r($invNum);
?> 