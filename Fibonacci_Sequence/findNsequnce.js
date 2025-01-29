// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function fib(n) {
  if (n == 1) {
    return [0];
  }

  if (n == 2) {
    return [0, 1];
  }

  let temp = [0, 1];

  for (i = 2; i < n; i++) {
    temp.push(temp[i - 1] + temp[i - 2]);
  }
  return temp;
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(10));
