// Split a number into its digits

// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(num) {
  const arr = num.toString().split("");
  return arr.map((num) => +num);

  // AUTHOR'S:
  // const string = num + '';
  // const strings = string.split('');
  // return strings.map(digit => Number(digit))
}

console.log(myFunction(193278)); // [1,9,3,2,7,8]
