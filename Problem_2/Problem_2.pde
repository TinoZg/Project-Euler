int limit = 4000000;
int sum = 0;
int current = 1;
int next = 2;
int temp;
while (current <= limit) {
  if (current % 2 == 0) {
    sum += current;
  }
  temp = next;
  next += current;
  current = temp;
}
println(sum);
