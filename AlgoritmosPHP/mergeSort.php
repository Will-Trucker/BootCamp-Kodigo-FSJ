<?php 
function mergeSort($arr){
    if(count($arr) < 2){
        return $arr;
    }

    $mid = floor(count($arr) /2);
    $left = mergeSort(array_slice($arr,0, $mid));
    $right = mergeSort(array_slice($arr,$mid));

    return merge($left,$right);
}

function merge($left, $right){
    $result = [];
    while(count($left) > 0 && count($right) > 0){
        if($left[0] < $right[0]){
            $result[] = array_shift($left);
        } else {
            $result[] = array_shift($right);
        }
    }
    return array_merge($result,$left,$right);
}

$palabras = ["pizza","burger","tacos","burritos","donuts"];
echo "Lista Original: " . implode(",",$palabras)."\n";
$sortedWords = mergeSort($palabras);
echo "Lista Ordenada (Alfabeto): ".implode(",",$sortedWords)."\n";



?>