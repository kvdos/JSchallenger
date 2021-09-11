// Return the percentage of a number

// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(obj) {
  return Math.round(obj.number * (obj.percentage / 100) * 100) / 100;
}

// AUTHOR'S:
// function myFunction({ number, percentage }) {
//   return (number / 100) * percentage;
// }

console.log(myFunction({ number: 100, percentage: 50 })); // 50
console.log(myFunction({ number: 777, percentage: 2 })); // 15.54
console.log(myFunction({ number: 500, percentage: 99 })); // 495
