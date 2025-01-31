<?php 
 function bubbleSort(&$arr){
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - $i - 1; $j++) {
            if ($arr[$j] < $arr[$j + 1]) {
                // Intercambiar
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
        }
    }
 }

 $list = [3,1,4,1,5,9,-2,6,5,3,5];
 echo "Lista Original: " . implode(",",$list),"\n";
 bubbleSort($list);

 echo "Lista Ordenada Desc: " . implode(", ",$list)."\n";

?>