function binarySearch(n, t) {
  return search(n, t, 0, n.length - 1);
}

function search(n, t, min, max) {
  if (min > max) return -1;
  let mid = Math.floor((min + max) / 2);
  if (n[mid] === t) return mid;
  if (n[mid] > t) return search(n, t, min, mid - 1);
  if (n[mid] < t) return search(n, t, mid + 1, max);
}

console.log(binarySearch([1, 22, 33, 44, 55, 78], 22));

// Time Complexity is O(log(n))
