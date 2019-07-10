<?php

$sum = 0;
$i = 1;
while (3 * $i < 1000 || 5 * $i < 1000) {
    if (3 * $i < 1000) {
        $sum += 3 * $i;
    }
    // next we have to ensure that we don't count
    // common multipliers twice
    if (5 * $i < 1000 && 5 * $i % 3 !== 0) {
        $sum += 5 * $i;
    }
    $i++;
}
echo $sum;