// https://www.codewars.com/kata/57d2ba8095497e484e00002e/train/javascript

function borrow(s) {
  splitStr = s.split('')
  let word = splitStr.filter(function (val) { //making each individual letter a part of array like = ["W","h","A","t"]
    return val !== " " && val !== "!" && val !== "?" && val !== "." && val !== "," && val !== "_" && val !== ":" && val !== ";"
  })  // then do NOT return punctutations 
  return word.join("").toLowerCase()
}

console.log(borrow('WhAt! FiCK! DaMn CAke?'))

// if punct, delete puctution to empty ''
//any empty ' '  - make sure it becomes one string
// if capital toLowerCase

//Below support on methods:
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),

// trial
// function borrow(s) {
//   punct = "!@#$%^&*()_+<>?:.,;"
//   newS = " "
//   if (s !== punct) {
//     return s
//   }
//   return
// }