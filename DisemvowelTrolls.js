//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let newStr = str.split("a").join('').split("e").join('').split("i").join('').split("o").join('').split("u").join('').split("A").join('').split("E").join('').split("I").join('').split("O").join('').split("U").join('')
  return newStr
}



console.log(disemvowel("This website is for losers LOL!"))

// we to iterarate over the string - and remove vowels if we see them
//return string without vowels

//remove vowels
//vowels: A, E, I, O, U, Y

// https://www.geeksforgeeks.org/javascript-split-a-string-with-multiple-separators/

// nicer alternative solution:
// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str.split('').filter(function (el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }

//  indecOf()  = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//  indexOf() = method returns the first index at which a given element can be found in the array, or -1 if it is not present.