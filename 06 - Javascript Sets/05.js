// Delete element from Set

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function myFunction(set, val) {
  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1)); // new Set([2, 3])

console.log(myFunction(new Set("12345"), "3")); // new Set(['1', '2', '4', '5'])

console.log(myFunction(new Set([1, 2, 3]), 4)); // new Set([1, 2, 3])
