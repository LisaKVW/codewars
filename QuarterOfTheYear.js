//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month >= 3 && month <= 6) {
    return 2
  } else if (month >= 7 && month <= 9) {
    return 3
  } else {
    return 4
  }
}

// or use Math.ceil()  -always rounds a number up to the next largest integer.
// const quarterOf = month => Math.ceil(month / 3);


// 4 quarters 0-2  AND 3-6  AND   7-9 AND  10-12
//return month as int

console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))