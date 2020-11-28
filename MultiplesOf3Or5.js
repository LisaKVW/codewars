//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

//created sum variable to return answer
//sum += i   means sum +i when i meets criteria from for loop

// because we did the || we only get ONE time for example 15