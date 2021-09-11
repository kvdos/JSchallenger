// Check if a number is a whole number

// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(num) {
  //   return Number.isInteger(num);
  //   return num % 1 !== 0;
  return Math.floor(num) === num;

  // AUTHOR'S:
  // return num - Math.floor(num) === 0
}

console.log(myFunction(4)); // true
console.log(myFunction(1.123)); // false
console.log(myFunction(1048)); // true
console.log(myFunction(10.48)); // false
