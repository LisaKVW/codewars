//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript 

// function solve(a, b) {
//   let arrResult = [];
//   let cont = 0;
//   for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) {
//         cont++;
//       }
//     }
//     arrResult.push(cont);
//     cont = 0;
//   }

//   return arrResult;
// }

// const solve = (a, b) =>
//   b.map(val => a.filter(v => v === val).length);

function solve(a, b) {
  let result = []
  let sum = 0
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i]) {
        sum ++
    }
  }
    result.push(sum)
    sum = 0
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