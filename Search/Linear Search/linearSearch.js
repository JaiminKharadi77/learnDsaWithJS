function linearSearch(n, t) {
  let i = 0;
  while (i < n.length) {
    if (n[i] === t) return i;
    i++;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 55, 33], 1));

// Time Complexity is O(n)