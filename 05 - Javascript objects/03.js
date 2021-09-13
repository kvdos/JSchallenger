// Accessing object properties three

// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction(obj, str) {
  return obj[str];
}

console.log(myFunction({ continent: "Asia", country: "Japan" }, "continent")); // 'Asia'
console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country")); // 'Sweden'
