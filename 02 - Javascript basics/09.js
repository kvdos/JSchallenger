// Find the correct word by incrementing letters in alphabet

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str) {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt() + 1))
    .join("");

  // AUTHOR'S:
  // const arr = [...str];
  // const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  // return correctedArray.join('');
}

console.log(myFunction("bnchmf")); // coding
