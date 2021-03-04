// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  if( a === b){
    return a
  } else if (a !== b) {
    return a + b
  }
}

//return sum of 2 integers a + b
// if a && b are. === return a/b
//The question is asking you to return the sum of ALL numbers in the RANGE of a and b .For example, if a = 1 and b = 5, then return 1+2+3+4+5.

console.log(getSum(0, -1));
console.log(getSum(0, 1));