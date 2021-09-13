// Merge two objects with matching keys

// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(a, b) {
  //   for (let key in b)
  //     if (key === "country") {
  //       b.city = b[key];
  //       delete b[key];
  //     }

  //   return { ...a, ...b };

  // AUTHOR'S:
  const { country, ...rest } = b;
  return { ...a, ...rest, city: country };
}

console.log(
  myFunction(
    { continent: "Europe", country: "Germany" },
    { planet: "Earth", country: "Munich", state: "Bavaria" }
  )
); // { continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}

console.log(
  myFunction(
    { continent: "North America", country: "USA" },
    { planet: "Earth", country: "Los Angeles", state: "California" }
  )
); // { continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'}
