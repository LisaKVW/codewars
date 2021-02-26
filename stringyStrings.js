// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
  string = "1";
  for (let i = 0; i < size - 1; i++) {
    console.log(size)
    if (i % 2 == 0)
      string += "0";
    else
      string += "1";
  }
  return string;
}

// added size -1 because or else our return gives back a number that is +1 to big
//so doing -1, we get the right answer

// OR

// function stringy(size) {
//   var str = '';
//   for (var i = 1; i <= size; i++)
//     str += i % 2;
//   return str;
// }


console.log(stringy(3), 'string', 'Make sure it\'s a string not a number (the function is called stringy after all!)');

