// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript
// Dollars to cents

function formatMoney(amount) {
  let num = amount.toFixed(2)
  return `$${num}`
}

// need to add 00
//  need to add $ via interpolation?
//  always need to have 2x int behind .
//The toFixed() method formats a number using fixed-point notation.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

console.log(formatMoney(39.99));