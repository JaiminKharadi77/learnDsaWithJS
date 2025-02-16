function cartesianProduct(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}

// Example usage:
const setA = [1, 2];
const setB = ['a', 'b'];

console.log(cartesianProduct(setA, setB));
// Output: [ [1, 'a'], [1, 'b'], [2, 'a'], [2, 'b'] ]
//Time Complexity is O(n^2);













// multiple arrays
// function cartesianProduct(...arrays) {
//     return arrays.reduce((acc, curr) => {
//         return acc.flatMap(a => curr.map(b => [...a, b]));
//     }, [[]]);
// }

// // Example usage:
// const setA = [1, 2];
// const setB = ['a', 'b'];
// const setC = ['X', 'Y'];

// console.log(cartesianProduct(setA, setB, setC));
// // Output: [ [1, 'a', 'X'], [1, 'a', 'Y'], [1, 'b', 'X'], [1, 'b', 'Y'], [2, 'a', 'X'], [2, 'a', 'Y'], [2, 'b', 'X'], [2, 'b', 'Y'] ]
