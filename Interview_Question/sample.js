// Q.1)find the unique numbers in array.

let a = [1, 2, 2, 3, 4, 4, 5];

let uniqueValues = [];

for (let i = 0; i < a.length; i++) {

  let count = 0;

  for (let j = 0; j < a.length; j++) {

    if (a[i] === a[j]) {

      count++;



      if (count > 1) {

        break;

      }

    }

  }



  if (count === 1) {

    uniqueValues.push(a[i]);

  }

}

console.log(uniqueValues); 



// Q)2 To find the maximum value in an array using a for loop, here's a simple approach:


let a1 = [1, 2, 2, 3, 4, 4, 5];
let max = a1[0]; // Assume the first element is the maximum initially

for (let i = 1; i < a1.length; i++) {
  if (a[i] > max) { // use "<" for finding minimum value
    max = a[i]; // Update max if a larger value is found
  }
}

console.log(max); // Output: 5







//Q.3) Here’s a simple JavaScript function to uppercase only the first word in a string:

function uppercaseFirstWord(str) {
  if (!str) return str; // Handle empty strings
  const words = str.split(" ");
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ");
}

// Example usage:
const result = uppercaseFirstWord("hello world, how are you?");
console.log(result); // Output: "Hello world, how are you?"


function uppercaseLastWord(str) {
    if (!str) return str; // Handle empty strings
    const words = str.split(' ');
    const lastWordIndex = words.length - 1;
    words[lastWordIndex] = words[lastWordIndex].toUpperCase();
    return words.join(' ');
  }
  
  // Example usage:
  const result2 = uppercaseLastWord("this is zluck");
  console.log(result2); // Output: "this is ZLUCK"
  







  //Q4 Capitilize first and last letter of word

  function capitalizeWords(input) {
    return input
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a single string
  }
  
  // Example usage:
  const text = "hello world! this is a test.";
  const capitalizedText = capitalizeWords(text);
  console.log(capitalizedText); // Output: "Hello World! This Is A Test."

  


  function capitalizeLastLetter(input) {
    return input
      .split(' ') // Split the string into an array of words
      .map(word => {
        if (word.length === 1) {
          return word.toUpperCase(); // If the word is a single letter, capitalize it
        }
        return word.slice(0, -1) + word.slice(-1).toUpperCase(); // Capitalize the last letter
      })
      .join(' '); // Join the words back into a single string
  }
  
  // Example usage:
  const text2 = "hello world! this is a test.";
  const result3 = capitalizeLastLetter(text2);
  console.log(result3); // Output: "hellO worlD! thiS iS A tesT."
  