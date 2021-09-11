// Simply return the given input
function myFunctionInput(input) {
  return input;
}

console.log(myFunctionInput(123)); // 123
console.log(myFunctionInput("123")); // "123"

/////////////////////////////////////////////////////////

// Find the maximum number of an array
function myFunctionMaxNum(input) {
  return Math.max(...input);
}

console.log(myFunctionMaxNum([1, 2, 3]));
console.log(myFunctionMaxNum([10, 1000, 100]));
console.log(myFunctionMaxNum([-10, -2, -11]));
