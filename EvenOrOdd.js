// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function even_or_odd(number) {
  if (number % 2 === 0) {
    return ("Even")
  } else {
    return ("Odd")
  }
}

console.log(even_or_odd(2))
console.log(even_or_odd(0))
console.log(even_or_odd(7))
console.log(even_or_odd(1))


// argument is an integer
// return even for even numbers
// return off for odd numbers
// to find even VS odd - use modules?