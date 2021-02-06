//fibonacci sequence
// write a function that gives me the 5 and 10 value
// Fibonacci - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// considered a BASE CASE

// BACK  return: 3 & 34

const fibi = (n) => {
  if (n <= 0) {
    return 'na'
  } else if (n === 1) {
    return 0
  } else if (n === 2) {
    return 1
  }
  let a = 0
  let b = 1
  let check = 2
  while (check < n) {
    c = a + b
    b = c
    a = b
    check += 1
  }
  return c
}