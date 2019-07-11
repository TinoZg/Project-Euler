<?php

function isPalindrome($n) {
    $m = 0;
    $temp = $n;
    while ($temp != 0) {
        $m = $m * 10 + ($temp % 10);
        $temp = floor($temp / 10);
    }
    if ($m == $n) {
        return true;
    } else {
        return false;
    }
    
}

$max = 0;

for ($i = 999; $i > 99; $i--) {
    for ($j = 999; $j > 99; $j--) { 
        if (isPalindrome($i * $j)) {
            if ($i * $j > $max) {
                $max = $i * $j;
            }            
        }
    }
}
echo $max;