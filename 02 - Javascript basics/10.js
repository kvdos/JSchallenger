// Clear up the chaos behind these strings

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside',
// and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  const str = a.concat(b.split("").reverse().join("")).replaceAll("%", "");
  return str[0].toUpperCase() + str.slice(1);

  // AUTHOR'S:
  // const first = a.split('').map(part => part.replace('%', '')).join('');
  // const second = b.split('').reverse().map(part => part.replace('%', '')).join('');
  // return first.charAt(0).toUpperCase() + first.slice(1) + second
}

console.log(myFunction("java", "tpi%rcs")); // 'Javascript'
console.log(myFunction("c%ountry", "edis")); // 'Countryside'
console.log(myFunction("do%wn", "nw%ot")); // 'Downtown'
