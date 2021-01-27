// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let postInt = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      postInt += arr[i]
    }
  }
  return postInt
}

console.log(positiveSum([1, 2, 3, 4, 5]))
console.log(positiveSum([1, -2, 3, 4, 5]))

// if integer is positive return sum
// if neg, we should ignore
// if there is no data - we return 0
//reduce() method to find or calculate the sum of an array of numbers.