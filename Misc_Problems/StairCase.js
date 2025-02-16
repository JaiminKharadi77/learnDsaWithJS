function countWays(n) {
  let temp = [1, 2];

  for (i = 2; i < n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }

  return temp[n - 1];
}

console.log(countWays(4));
// time complexity is O(n)
