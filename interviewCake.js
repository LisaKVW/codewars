// permutation and palindrome 
function hasPalinedromePermutation(theString) {
  let object = {}
  for (let letter of theString)
    if (!object[letter]) {
      object[letter] = 1
    } else {
      object[letter] = object[letter] + 1
    }
  let odds = 1
  console.log(object)
  if (odds === object[letter]) {
    return false
  }
  return object
}

console.log(hasPalinedromePermutation('civic'))
console.log(hasPalinedromePermutation('anna'))
console.log(hasPalinedromePermutation('racecar'))
console.log(hasPalinedromePermutation('popoa'))

// 'civic'- but if change order it is still a palindrome
// anna - is also palendrome
// so we can have 1 letter that is different in the string
// but if there are more then 1 letter different - we will not have a palindrome
// answer should return a boolean - true or false
//civic - anna - carecar

// for ...off  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 