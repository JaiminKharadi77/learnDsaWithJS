function recFactorial(n) {
  if (n < 1) return 1;

  return n * recFactorial(n - 1);
}

console.log(recFactorial(3));

// Time Complexity is O(n)
