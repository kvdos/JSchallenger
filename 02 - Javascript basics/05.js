// Check whether a string contains another string and concatenates

// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;

  // AUTHOR'S:
  // return a.indexOf(b) !== -1 ? b + a : a + b;
}

console.log(myFunction("cheese", "cake")); // "cheesecake"
console.log(myFunction("lips", "s")); // "slips"
console.log(myFunction("Java", "script")); // "Javascript"
