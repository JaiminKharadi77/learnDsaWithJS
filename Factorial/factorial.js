function factorial(n) {
  if (n == 0) {
    return 1;
  }
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    temp = temp * i;
  }
  return temp;
}

console.log(factorial(6));

// Time Complexity is Big O(n)
