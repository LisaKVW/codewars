//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  numbers = numbers.split(" ")
  return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers)
}


// return max and min in string
//  output must return space between numbers ""
//  return high number first
// tips: https://www.w3schools.com/jsref/jsref_split.asp
// https://www.w3schools.com/js/js_function_apply.asp
