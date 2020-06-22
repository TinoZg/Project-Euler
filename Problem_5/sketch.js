let n = 1;
function setup() {
  noCanvas(400, 400);
  while(1) {
    if (isDivisible(n)) {
      break;
    }
  n++;
  }
  
  console.log(n);
}

function isDivisible(n) {
  for(let i = 2; i <= 20; i++) {
    if (n % i != 0) {
      return false;
    }  
  }
  return true;
}

