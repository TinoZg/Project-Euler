let sum1 = 0;
let sum2 = 0;
function setup() {
  noCanvas();
  for(let i = 1; i <= 100; i++) {
    sum1 += i * i;
    sum2 += i;
  }
  sum2 = sum2 * sum2;
  console.log(sum2 - sum1);
}
