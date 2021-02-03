//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  let pound = "£"
  if (bonus === true){
    return (pound + salary * 10)
  } else {
    return (pound + salary)
  }
}

//  OR TERNARY with interpolation
// function bonusTime(salary, bonus) {
//   return bonus ? `£${10 * salary}` : `£${salary}`;
// }
  
console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(60000, false));


// function bonusTime(salary, bonus) {
//   const pound = "£"
//   return (bonus ? salary * 10 : salary)
// }

// i first need to know if bonus true- can do ternary
// if true, grab the agrument and multiply by 10 
//return the value in POUNDS string

// function with 2 arguments
// argument 1 = int
// agrument 2 = boolean
// bonus = true - salary *10
//bonus = false = na
// return string with "£"