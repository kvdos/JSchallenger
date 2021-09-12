// Return the longest string from an array of strings

// Write a function that takes an array of strings as argument
// It should return the longest string

// function myFunction(arr) {
//   return arr.reduce((acc, cur) => {
//     if (cur.length > acc.length) return (acc = cur);
//     return acc;
//   }, "");
// }

// function myFunction(arr) {
//   let acc = "";

//   arr.forEach((el) => {
//     if (el.length > acc.length) acc = el;
//   });

//   return acc;
// }

// AUTHOR'S:
function myFunction(arr) {
  return arr.reduce((acc, cur) => (acc.length <= cur.length ? cur : acc));
}

console.log(myFunction(["help", "me"])); // 'help'
console.log(myFunction(["I", "need", "candy"])); // 'candy'
