function setup() {
  createCanvas(400, 400);
  let maxValue = 999;
  let maxProduct = 1;
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      if (isPalindrome(i * j) && i * j >= maxProduct) {
        maxProduct = i * j;
      } //end if
    } //end j loop
  } // end i loop
  console.log(maxProduct);
}

function isPalindrome(n) {
  let m = 0;
  let temp = n;
  let remainder;
  while (temp > 0) {
    remainder = temp % 10;
    temp = int(temp / 10);
    m = 10 * m + remainder;
  }
  return m == n
}