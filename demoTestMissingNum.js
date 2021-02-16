// find missing number in array

// This is a demo task.
// Write a function:
//   function solution(A);
// that, given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
//   N is an integer within the range[1..100, 000];
// each element of array A is an integer within the range[−1, 000, 000..1, 000, 000].
// Copyright 2009–2021 by Codility Limited.All Rights Reserved.Unauthorized copying, publication or disclosure prohibited.

function solution(A) {
  const newArr = A.filter(e => e > 0).sort()
  console.log(newArr)
  if (newArr.length === 0) {
    return 1
  }
  let lastValue = newArr[0] // as we loop throuh it - the position of each new 'lastvalue' will be 0
  console.log('lastvalue',lastValue)
  /*
  [ 1, 1, 2, 3, 4, 6 ]
  i:1, lastValue = 1, newArr[i] = 1  => lastValue = 1
  i:2, lastvalue = 1, newArr[i] = 2  => lastValue = 2
  i:3, lastValue = 2, newArr[i] = 3 => lastValue = 3
  i:4, lastValue = 3, newArr[i] = 4 => lastValue = 4
  i:5, lastValue = 4, newArr[i] = 7
  */
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] - lastValue <= 1) {
      lastValue = newArr[i]
    }
    else {
      return lastValue + 1
    }
  }
  return lastValue + 1
}

// OR VIA HASHING

function solution(A) {
  if (A.length === 0) {
    return 1
  }
  const hash = {}
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      hash[A[i]] = 1
    }
  }
  /* 
   hash = 
      { 
          '1': 1,
          '2' : 1,
          '3' : 1,
          '4' : 1,
          '6' : 1
      }
   */
  let minValue = 1
  while (minValue in hash) {
    minValue++
  }
  return minValue
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))
