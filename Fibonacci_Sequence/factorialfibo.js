function factofibo(n) {
  if (n < 1) return 0;
  if (n == 1) return 1;

  return factofibo(n - 2) + factofibo(n - 1);
}

console.log(factofibo(6));

// Time Complexity is O(2^n)
