function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swapped);
}

let y = [2, 33, 4, 5, 666, 55];
bubbleSort(y);

console.log(y);

// Time Complexity is O(n^2)
