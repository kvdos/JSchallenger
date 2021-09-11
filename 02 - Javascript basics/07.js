// Round a number to 2 decimal places

// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(num) {
  return Math.round(num * 100) / 100;

  // AUTHOR'S:
  // return Number(num.toFixed(2));
}

console.log(myFunction(2.12397)); // 2.12
console.log(myFunction(3.136)); // 3.14
console.log(myFunction(26.1379)); // 26.14
