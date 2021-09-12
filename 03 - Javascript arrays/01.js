// Sort an array of strings alphabetically

// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

function myFunction(arr) {
  return arr.sort();
}

console.log(myFunction(["b", "c", "d", "a"])); // ['a', 'b', 'c', 'd']
console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']
