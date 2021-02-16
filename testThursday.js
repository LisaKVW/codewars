function solution(N) {
  let num = []
  num.push(N)
  let five = 5
  let lastNum = num[-1]
  console.log(lastNum)
  for (let i = 0; i < num.length; i++) {
    if (num[i].length - 1 === 0) {
      num.push(five)
    }
  }
  return num
}


console.log(solution(269))
console.log(solution(670))
console.log(solution(0))
console.log(solution(-999))

// function solution(N) {
//   let num = []
//   num.push(N)
//   let five = 5
//   num.unshift(five)
//   let newNum = num.join('')

//   return parseInt(newNum)
// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



// QUESTION 3

// function solution(S, K) {
//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//   const indexOfDay = days.indexOf(S)

//   const Int = (indexOfDay + K) % days.length
//   return days[Int]
// }

// we need to calculate S + K and return an day with the K
// loop? maybe while loop as we go from 0 to 500
// maybe forEach? or map? -- cant do need array
// we go through K=500, but 7 days in week so modules?

// S = days
// K = is int btw 0-500
// K is the amount of days later it is from S
// in returm - we do S and K - like, ('Wed', 2)
// monday =1

// QUESTION 2

// function solution(S) {
//   let lower = []
//   let count = 0
//   const Upper = S.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g)
//   return Upper
// }

// console.log(solution("azABaabza"))