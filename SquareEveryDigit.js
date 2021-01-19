//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
  let result = ''
  const numStr = String(num) // made a string
  for (let i=0; i < numStr.length; i++){ //looping through the string, this so we can grab each int by itself
    const square = Math.pow(+numStr[i], 2)   // numStr[] is base and exponent is 2
    result += square
}
return result
}


console.log(squareDigits(9119))
// multiply each number with each other - square root
// the new numbers - concatenate them
// to conat .join() - creates and return new string by concat all el in array
// i want to loop through each number and multiply *2
// Math.pow()  - return the base to the exponent - Math.pow(base, exponent) 