// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

function fixTheMeerkat(arr) {
  return arr.reverse()
}

// given array with 3 values
// return correct order of meerkat
// you have to change the element positions with the same exact logics

//  reverse() - reverses the array - which is good for now, as the middle item, is always in the middle given the test base

console.log(fixTheMeerkat(["tail", "body", "head"]));
console.log(fixTheMeerkat(["tails", "body", "heads"]));
console.log(fixTheMeerkat(["bottom", "middle", "top"]));
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]));
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]));