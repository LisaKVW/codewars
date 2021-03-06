// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  let arr = []
  let sum = 0
  if (a === b) {
    return a
  } else if (a !== b) {
    for (let i = a; i <= b; i++) {
      arr.push(i)
    }
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j]
    }
  }
  return sum
}

// the 2nd for loop is not gonna work cause we need starting point of a or b (which ever is smaller) - row 13 
//close though!

//return sum of 2 integers a + b
// if a && b are. === return a/b
// if space between 2 numbers, get each individual number between the a and b, and sum these up as well

console.log(getSum(0, -1));  // should give -1
console.log(getSum(0, 1));
console.log(getSum(174, 200));

// function getSum(a, b) {
//   if (a === b) {
//     return a
//   } else if (a !== b) {
//     return a + b
//   }
// }