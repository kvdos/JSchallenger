// How many times does a character occur?

// Write a function that takes two strings as arguments
// Return the number of times the first string occurs in the second string
function myFunction(a, b) {
  return b
    .toLowerCase()
    .split("")
    .filter((el) => el === a).length;

  // AUTHOR'S:
  // return b.toLowerCase().split(a).length - 1;
}

console.log(
  myFunction("m", "How many times does the character occur in this sentence?")
); // 2
console.log(
  myFunction("h", "How many times does the character occur in this sentence?")
); // 4
console.log(
  myFunction("z", "How many times does the character occur in this sentence?")
); // 0
