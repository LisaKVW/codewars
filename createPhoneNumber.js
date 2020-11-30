//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  let cleaned = ('' + numbers).replace(/\D/g, '')
  //   /\D -Matches any character that is not a digit (Arabic numeral).
  // /g for Do a global search for non-digit characters:
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

//OR EASIER
function createPhoneNumber(numbers) {
  let array = '(xxx) xxx-xxxx'
  numbers.forEach(newNum => {
    array = array.replace('x', newNum)
  })
  return array
}


//source on regex https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//regex (cheatsheet) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
//create an array that accepts 10 integers
//the return is a STRING
//return must by in phone format "(xxx) xxx-xxxx"
