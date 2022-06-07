// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b){
  var output=[]
  while(a.length!==0){
    output.push(a.slice(-3));   // we take 3 chars from the end and push them to our list
    a=a.slice(0,-3);            // it's a without the last three chars
  }
  return output.reverse().join(b);       // output is a stack, we reverse it then join it using the value of b between the chars. 
}

myFunction('1234567','.')   // Expected  '1.234.567'   Note: if you insert 1234567 (number) instead of '1234567' (string) you have to convert it to String (a=a.toString())
myFunction('abcde','$')    // Expected  'ab$cde'
myFunction('zxyzxyzxyzxyzxyz','w')    // Expected  'zwxyzwxyzwxyzwxyzwxyz'

////////////////////
//Author's Solution

//function myFunction(a, b) {
//   let result = [];
//   let rest = a;
//   while (rest.length) {
//   	result.push(rest.slice(-3));
//   	rest = rest.slice(0, -3);
//   }
//   return result.reverse().join(b);
//}
