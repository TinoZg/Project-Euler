let n = 10001;
let primeNumber = 0;
let i = 2;
let solution;

function setup() {
  noCanvas();
  while (primeNumber < n) {
    if (isPrime(i)) {
      primeNumber++;
    }
    solution = i;
    i++;
  }
  console.log(solution);
}

function isPrime(n) {
  for (let i = 2; i <= floor(sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}