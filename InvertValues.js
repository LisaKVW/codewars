// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  return array.map(x => x === 0 ? x : -x);
}

function invert(array) {
  let newArray = []
  let newPos = ""
  let newNeg = ""
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      newPos = (array[i] * -1)
      newArray.push(newPos)
    } else if (array[i] >= 0) {
      newNeg = (array[i] * -1)
      newArray.push(newNeg)
    } else {
      newArray
    }
  }
  return newArray
}
console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))

// convert negative to positive and visa versa
// nega to pos = Math.abs()
// i would do an === statement to check for pos and neg values
// minus * minus = becomes positive
// minus * positive = becomes negative