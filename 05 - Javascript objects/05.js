// Swap object keys and values

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  const res = {};
  for (let key in obj) res[obj[key]] = key;
  return res;

  // AUTHOR'S:
  // return Object.keys(obj).reduce((acc, cur) => {
  //   return { ...acc, [obj[cur]]: cur };
  // }, {});
}

console.log(
  myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" })
); // { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }

console.log(
  myFunction({ sheep: "animal", ewe: "female", ram: "male", lamb: "young" })
); // { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }

console.log(myFunction({ Berlin: "city", Germany: "country" })); // { city: 'Berlin', country: 'Germany' }
