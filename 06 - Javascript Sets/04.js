// Creating Javascript Sets

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  // We may use the regular Set constructor to transform an Array into a Set:
  return new Set([a, b, c]);

  //   AUTHOR'S:
  //   const set = new Set();
  //   set.add(a);
  //   set.add(b);
  //   set.add(c);
  //   return set;
}

console.log(myFunction(1, "b", 3)); // Set {1, 'b', 3}

console.log(myFunction(NaN, null, false)); // Set {NaN, null, false}

console.log(myFunction("a", ["b"], { c: 3 })); // Set {'a', ['b'], { c: 3 }
