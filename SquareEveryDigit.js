//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  let newNum = Math.abs(num).toString().split('')   //Math.abs - returns the absolute value of a number - and setting that to a string and splitting it
  let arr = newNum.map((n) => {  // create array varialble and we map through it and on each n (number in string)
    return (parseInt(n) ** 2).toString()  // The exponentiation operator ( ** ) raises the first operand to the power of the second operand.
  })
  return parseInt(arr.join(''))

}


console.log(squareDigits(9119))
// multiply each number with each other - square root
// the new numbers - concatenate them
// to conat .join() - creates and return new string by concat all el in array
// i want to loop through each number and multiply *2
// Math.pow()  - return the base to the exponent - Math.pow(base, exponent) 
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

//TRIAL ! so close  - need to delete the quaotations in return
// function squareDigits(num) {
//   let result = ''
//   const numStr = String(num) // made a string
//   for (let i = 0; i < numStr.length; i++) { //looping through the string, this so we can grab each int by itself
//     const square = Math.pow(+numStr[i], 2)   // numStr[] is base and exponent is 2
//     result += square
//   }
//   return result.trim('',)
// }