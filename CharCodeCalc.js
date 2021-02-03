// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript 

function calc(x) {
let num = x.split('') //to make string into array
ASCii = []
console.log(num)
for (let i=0; i < num.length; i++){
  ASCii.push(num[i].charCodeAt(0))  
}
return ASCii
}

// return x.charCodeAt() // gives 65
console.log(calc('ABC'))

// x is string with base value of 65
// as we go down the alpha we do +1
// so we need to iterate over x and add +1
//on ce iteration is done we neec to concar all the numbers
// the last number of the concar we need to -6
// then the new total - we need to substract of original total which will return result

//total 1 = 
// A=65
// B=66
// C=67
// etc
// 65 66 67

//total2 = 65 66 61 (7-6)
// return = total1-total2