//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript 

function solve(a, b) {
  let result = []
  let sum = ''
  for (let i = 0; i < b.length; i++) {
      if (a[i] === b[i]) {
        sum ++
        result.push(sum)
      } else {
        sum = 0
        result.push(sum)
      }
    }
  return result;
}

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']))

// return an array with integers
//as we need to return integer and need to sum have variable for count
// need to compare array #2 to array #1 - and check if there is a match
// to find match else, else if?
// should we loop as well, this to check each one
// use .push() to enter new value into new emtpy array?

//trial 1 gives [1,0,0]
// function solve(a, b) {
//   let result = []
//   let count = ''
//   for (let i = 0; i < b.length; i++) {
//     if (a[i] === b[i]) {
//       count++
//       result.push(count)
//     } else {
//       count = 0
//       result.push(count)
//     }
//   }
//   return result;
// }