// find missing number in array
function solution(A) {
  let sortA = A.sort()
  let total1 = sortA.reduce((a, b) => a + b + 1)
  let total2 = sortA.reduce((a, b) => a + b)
  return total1 - total2
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))
// need to sort the array
//once sorted iterate through it and sum it = total
// now we make another array but with + 1
// total - array+1 = the diffence, the difference is the missing number

// [1, 2, 3, 4].reduce((a, b) => a + b, 0)

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