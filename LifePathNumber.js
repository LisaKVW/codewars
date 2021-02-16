//https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript

function lifePathNumber(dateOfBirth) {
  let single = dateOfBirth.split("-")
  return num
}

// goal to return ONE single integer between 1 and 9
// we would need to split the string into indiviual int
// once they are split we will add them to each other
// we need to make a condition to add the ones to each other between the '-' so break each of them apart? make one for year one for month and one for day
// if by adding them to each - we do NOT have one integer - we will need to sum those numbers - until we have one int only
// once each Year, Month and Day are one Int - we sum them to each other 
// if this sum is NOT one int we need to split them again and add them to each other
// so we continously split - sum - until the final result of each is one POStive INT
// I would need an if statement to NOT return 0 or any negative numbers

// sum year array = [0]+[1]+[2]+[3]
// sum of month = [5]+[6]
// sum of day = [8]+[9]
// to do this could we use splice()?

// function lifePathNumber(dateOfBirth) {
//   let single = dateOfBirth.split("") - gives ['1','8','7','9']
//   let year = single.splice(0, 4, 0)  //holds the year
//   let month = single.splice(2, 2, 0) //holds the month
//   let day = single.splice(4, 2, 0) //holds the day
//   let sumYear = year.reduce((a, b) => a + b)
//   return year

console.log(lifePathNumber("1879-03-14"))

console.log(lifePathNumber("1815-12-10"))
