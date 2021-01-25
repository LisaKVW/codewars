// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

const paperwork = (n,m) => n > 0 && m > 0 ? n * m : 0

// const paperwork = (n,m) => {
//   let result = 0
//   if (n > 0 && m > 0) {
//     result = (n * m)
//   }
//   return result
// }


console.log(paperwork(5, 5))

// function getFee(isMember) {
//   return (isMember ? '$2.00' : '$10.00');
// }

// "n" = classmates
// "m" = pages
// result returns by n * m = result
// if its negative we want for an answer 0
// if n and m are postive = mutliply if NOT = 0

// ASSIGNMENT BELOW
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.If n < 0 or m < 0 return 0.
// Example:
// n = 5, m = 5: 25
// n = -5, m = 5: 0

// const paperwork = (n, m) => {
//   let result = 0
//   if (n > 0 && m > 0) {
//     result = (n * m)
//   }
//   return result
// }

// function paperwork(n, m) {
//   let result = 0
//   if(n > 0  && m > 0) {
//   result = (n * m)
// }
// return result
// }