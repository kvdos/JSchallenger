// Multiplication, division, and comparison operators

// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); // 4050
console.log(myFunction(2, 0.5)); // 1
