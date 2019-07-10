<?php

$previous = 1;
$current = 2;
$sum = 0;

while ($previous <= 4e6) {
    if ($previous % 2 === 0) {
        $sum += $previous;
    }
    $temp = $current;
    $current = $current + $previous;
    $previous = $temp;    
}

echo $sum;