// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
//  reversed words

function reverseWords(str) {
  let ar = str.split(" ")
  let rev = ar.reverse()
  let ns = rev.join(" ")
  return ns
}

//make string an array
// array reverse the words
// return reversed array - set back to string

console.log(reverseWords("hello world!"))
console.log(reverseWords("yoda doesn't speak like this"))
console.log(reverseWords("foobar"))
console.log(reverseWords("kata editor"))
console.log(reverseWords("row row row your boat"))
  