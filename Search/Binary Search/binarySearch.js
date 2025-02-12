arr = [3, 44, 45, 100, 102];

function binarySearch(n, t) {
  let min = 0;
  let max = n.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (n[mid] === t) return mid;

    if (n[mid] > t) {
      max = mid - 1;
    }
    if (n[mid] < t) {
      min = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 102));

// Time Complexity is O(log(n))