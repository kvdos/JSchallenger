// Calculate difference between two dates in hours, minutes, and seconds

// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(a, b) {
  const hrs = Math.abs(a.getHours() - b.getHours());
  const min = Math.abs(a.getMinutes() - b.getMinutes());
  const sec = Math.abs(a.getSeconds() - b.getSeconds());
  return { hrs, min, sec };

  // AUTHOR'S:
  //   const dif = Math.abs(a - b);
  //   const hrs = Math.floor(dif / 1000 / 60 / 60);
  //   const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  //   const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  //   return { hrs, min, sec }
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
); // { hrs: 0, min: 45, sec: 10 }

console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
); // { hrs: 1, min: 50, sec: 23 }

console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
); // { hrs: 3, min: 4, sec: 12 }
