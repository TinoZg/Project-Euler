let b = 2;
let sum = 0;
while(b < 2000000) {
    if(isPrime(b)) {
        sum += b;
    }
    b++;
}
console.log('Sum of primes is' + '\n' + sum);

function isPrime(n) {
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


