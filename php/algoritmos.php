<?php 
    // Metodo de Burbuja - BubbleSort
    function bubleSort($arr){
        
        if(count($arr) <= 1) return "Necesito al menos dos parametros";

        for($i = 0; $i < count($arr); $i++){
            // print("ESTE EL BUCLE DEL IF");
            
            for($j = 0; $j+1 < count($arr); $j++){
                // print("Esto es el bucle con J y vale: {$arr[$j]} \n");
                // print("Esto es el bucle con J y su siguiente es: {$arr[$j+1]} \n");

                if($arr[$j] < $arr[$j+1]){
                    $temp = $arr[$j];
                    $arr[$j] = $arr[$j+1];
                    $arr[$j+1] = $temp;
                }
            }
        }
        return $arr;

    }

    $arraycito = [8,10,5,40,7];
    bubleSort($arraycito);

    function inserctionSort($arr){
        if(count($arr) <= 1) return "Que gracioso que sos!";

        for($i = 1; $i < count($arr); $i++){
            $key = $arr[$i];

            $j = $i - 1;
            while($arr[$j] > $key){
                $arr[$j+1] = $arr[$j];
                $j--;
            }
            $arr[$j+1] = $key;
        }
        return $arr;
    }

    function mergeSort($arr){
        if(count($arr) <= 1) return $arr;

        $mid = floor(count($arr)/2);

        $left = array_slice($arr,0,$mid);
        $right = array_slice($arr,$mid);

        $left = mergeSort($left);
        $right = mergeSort($right);


        // print_r($left);
        // print_r($right);
        return merge($left,$right);
    }

    function merge($left,$right){

        $result = [];
        while(count($left) > 0 && count($right) > 0){
            if($left[0] <= $right[0]){
                array_push($result,array_shift($left));
            } else {
                array_push($result,array_shift($right));
            }
        }

        while(count($left)>0){
            array_push($result,array_shift($left));
        }

        while(count($right) > 0){
            array_push($result,array_shift($right));
        }

        return $result;
    }

    mergeSort([
        5,1,3,2,8,7,6
    ]);

    print_r(mergeSort([
        5,1,3,2,8,7,6
    ]));

?>