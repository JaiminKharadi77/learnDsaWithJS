// using golden ratio formula

// A function that returns true if x is a perfect square

function isPerfectSquare(x) {
  let sqrt = parseInt(Math.sqrt(x));
  return sqrt * sqrt == x;
}

// Returns true if n is a Fibonacci Number, else false

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// Example usage:
let i = 34;
if (isFibonacci(i)) {
  console.log(i + " is a Fibonacci number.");
} else {
  console.log(i + " is not a Fibonacci number.");
}

// using iterative formula
function isFibonacci(N) {
  if (N == 0 || N == 1) {
    return true;
  }

  let a = 0,
    b = 1,
    c;

  while (true) {
    c = a + b;
    a = b;
    b = c;

    if (c == N) {
      return true;
    } else if (c >= N) {
      return false;
    }
  }
}
j = 8;

if (isFibonacci(j)) {
  console.log(j + " is a Fibonacci number.");
} else {
  console.log(ij + " is not a Fibonacci number.");
}
