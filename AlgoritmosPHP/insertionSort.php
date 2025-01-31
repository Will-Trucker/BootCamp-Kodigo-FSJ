<?php
function insertionSort(&$arr) {
    $n = count($arr);
    for ($i = 1; $i < $n; $i++) {
        $key = $arr[$i];
        $j = $i - 1;
        while ($j >= 0 && $arr[$j] > $key) {
            $arr[$j + 1] = $arr[$j];
            $j--;
        }
        $arr[$j + 1] = $key;
    }
}

$names = ["John", "Alice", "Bob", "Charlie", "Diana"];
echo "Lista original: " . implode(", ", $names) . "\n";
insertionSort($names);
echo "Lista ordenada (alfabéticamente): " . implode(", ", $names) . "\n";
?>