<?php

$x = 600851475143;
$i = 2;
$max = 0;
while ($i <= $x) {
    while ($x >= $i && $x % $i === 0) {
        $x /= $i;
        $max = $i;
    }
$i++;    
}

echo $max;
