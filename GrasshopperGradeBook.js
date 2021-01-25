//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript 

function getGrade(s1, s2, s3) {
  let result = (s1 + s2 + s3)
  if (result >= 90 && result <= 100) {
    return "A"
  } else if (result >= 80 && result <= 90) {
    return "B"
  } else if (result >= 70 && result <= 80) {
    return "C"
  } else if (result >= 60 && result <= 70) {
    return "D"
  } else {
    return "F"
  }
}

// find the mean of three scores
// to find the mean we have sum all scores and divide by 3
// we need to return a letter grade