// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript 

function calc(x) {
total1 = []
total2 = []  //total 
let letter = x.split('') //to make string into array
//for total1 below
  for (let j = 0; j < letter.length; j++) {
    total1.push(letter[j].charCodeAt(0))  //gives array with total1 char
  }
  console.log(total1)
//for total 2
for (let i=0; i < letter.length; i++){
  total2.push(letter[i].charCodeAt(0))  //gives array with total2 char [65,66,67]

// let lastNum = total2[total2.length - 1] // taking of the last num
// let newNum = lastNum -6  //doing -6 to get total2 last array index
let lastNumber = ''
  if (total2[i] === 7){
    lastNumber = (total2[i] = 1)
  }
}
total2.splice(-1,1,lastNumber)  // this now gives [65, 66, 61]


// final answer
let final = []
for (let k = 0; k < total1.length; k++){
  final.push(Math.abs(total1[k] - total2[k]))
}
let answer = final.pop()
return answer
}

// return x.charCodeAt() // gives 65
console.log(calc('ABC'))

// x is string with base value of 65
// as we go down the alpha we do +1
// so we need to iterate over x and add +1
//on ce iteration is done we neec to concat all the numers
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


// ALMOST NEED TO CHANGE the min 6 - it should be of num === 7 then become 1, so total2 needs update

// function calc(x) {
//   total1 = []
//   total2 = []  //total 
//   let letter = x.split('') //to make string into array
//   //for total1 below
//   for (let j = 0; j < letter.length; j++) {
//     total1.push(letter[j].charCodeAt(0))  //gives array with total1 char
//   }
//   console.log(total1)
//   //for total 2
//   for (let i = 0; i < letter.length; i++) {
//     total2.push(letter[i].charCodeAt(0))  //gives array with total2 char
//   }
//   let lastNum = total2[total2.length - 1] // taking of the last num
//   let newNum = lastNum - 6  //doing -6 to get total2 last array index
//   total2.splice(-1, 1, newNum)  // this now gives [65, 66, 61]


//   // final answer
//   let final = []
//   for (let k = 0; k < total1.length; k++) {
//     final.push(Math.abs(total1[k] - total2[k]))
//   }
//   let answer = final.pop()
//   return answer
// }

// // return x.charCodeAt() // gives 65
// console.log(calc('ABC'))