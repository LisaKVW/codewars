//https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript 

function solve(s, i) {
  s.replace(/[^a-zA-Z ]/g, "")
}

console.log(solve('abracadabra', 1))


//pseudo
// need to iterate over the string and check for a first starting at position left - untill all a gone
// remove from a string?
// we gonna place string in an array via split()
// after split - we want to remove the first a via shift()
// join() makes array into string
// filter()

// MUST BE DONE BELOW
//- first remove all letter 'a',
// 2nd remove  all letter 'b', 
// then remove all letter then 'c', etc...
// d
// r
// remove the leftmost character first.

//abracadabra

// Source: https://stackoverflow.com/questions/3568921/how-to-remove-part-of-a-string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
//https://love2dev.com/blog/javascript-remove-from-array/

//  TRIAL one works to delete first a
// function solve(s, i) {
//   let result = s.split("")
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === 'a') {
//       result.shift()
//     }
//     return result.join('')
//   }
// }

// console.log(solve('abracadabra', 1))'

//with filter

// function solve(s, i) {
//   let result = s.split("")
//   // console.log(result)
//   result.filter((letter, i, a) => {
//     if (letter[i] === 'a') {
//       result.splice(i, 5)
//       i--
//     }
//   })
//   return result
// }
