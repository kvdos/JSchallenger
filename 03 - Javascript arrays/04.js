// Sum up all array elements with values greater than

// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(arr, num) {
  return arr.filter((el) => el > num).reduce((acc, cur) => acc + cur);

  // AUTHOR'S:
  //   return arr.reduce((sum, cur) => {
  //     if (cur > num) return sum + cur;
  //     return sum;
  //   }, 0);
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)); // 1
console.log(myFunction([78, 99, 100, 101, 401], 99)); // 602
