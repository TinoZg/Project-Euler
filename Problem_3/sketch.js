function setup() {
  noCanvas();
  let max = 0;
  let n = 600851475143;
  for (let i = 2; i <= int(sqrt(n)); i++) {
    if (n % i == 0 && i >= max && isPrime(i)) {
      max = i;
    }
  }
  console.log(max);
}


function isPrime(n) {
  for (let i = 2; i <= int(sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}