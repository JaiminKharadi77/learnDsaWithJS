function isPowerofTwo(n) {
  if (n == 1) return true;

  let temp = 2;

  for (let i = 2; i <= n; i++) {
    if (temp === n) {
      return true;
    }
    temp = temp * 2;
  }
  return false;
}

console.log(isPowerofTwo(4));

function isPowerofTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}

console.log(isPowerofTwo(4));

// O(log(n))

function isPowerofTwo(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

console.log(isPowerofTwo(64));

// O((1))
