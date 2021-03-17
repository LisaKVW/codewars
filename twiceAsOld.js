//  https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
  son = sonYearsOld * 2
  answer = dadYearsOld - son
  return Math.abs(answer)
}


console.log(twiceAsOld(36, 7));  // 7x2= 14 then 36-14=22
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(22, 1));
console.log(twiceAsOld(29, 0));

// How many years ago was the father double his son's current age? 
// (or indeed how many years from now?)
// Math.abs() - return absolute number -delete the minus