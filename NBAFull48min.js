// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/train/javascript

function pointsPer48(ppg, mpg) {
  let result = (ppg / mpg)
  let final = ((result * 48))
  let rounded = Number(final.toFixed(1)) // toFixed - to get one decimal
  if (isNaN(rounded)) rounded = 0  // this says if rounded is NOT a number then  rounded = 0
  return rounded
}

console.log(pointsPer48(12, 20))
console.log(pointsPer48(10, 10))
console.log(pointsPer48(5, 17))
console.log(pointsPer48(0, 0))

// return how many point (ppg) are scored per 48min game, rounded one decimal
// ppg/mpg = point per game per minute of game = then to know based on 48min do * 48

// sample pointsPer48(12, 20) // 28.8  - SO 12/20 = 0.6   - 0.6*48min = 28.8

//ppg (points per game) 
// mpg (minutes per game)
//game runs 48 minutes (Four 12 minute quarters). 
// innputs will be int (num) or float (num with decimal)