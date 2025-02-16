function quickSort(arr) {
  if (arr < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 2, 3, 0, 56]));
// Time Complexity is O(n^2)
// Tume Complexity is 0(nlog(n))