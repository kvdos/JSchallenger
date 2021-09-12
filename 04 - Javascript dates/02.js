// Check if two dates are equal

// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise

function myFunction(a, b) {
  // return a.getTime() === b.getTime();

  return +a === +b;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
); // false
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
); // true
console.log(
  myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
); // false
