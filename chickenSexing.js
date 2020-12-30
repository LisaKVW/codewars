// https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb/train/javascript



function correctness(bob, expert) {
  var count = 0;
  for (i = 0; i < bob.length; ++i)
    if (bob[i] == expert[i])
      count++;
    else if (bob[i] == '?' || expert[i] == '?')
      count += 0.5;
  return count;
}

//BELOW VERY CLOSE
// function correctness(bobsDecisions, expertDecisions) {
//   count = 0
//   for (i = 0; i < bobsDecisions.length; i++) {
//     for (j = 0; j < expertDecisions.length; j++) {
//       if (bobsDecisions[i] === expertDecisions[j]) {
//         count += 1
//       } else if (bobsDecisions[i] !== expertDecisions[j] && bobsDecisions === "?" || expertDecisions === "?") {
//         count += 0.5
//       // } else if (bobsDecisions[i] === "?" || expertDecisions[j] === "?") {
//       //     count += 0.5
//       } else {
//         count += 0
//       }
//     }
//     return count
//   }
// }

console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']))
console.log(correctness(['?', 'F', 'F', 'F', 'F', 'F'], ['M', 'M', 'M', 'F', 'F', 'M']))  //should give 2.5 got 3


// when bob === expert === 1point
// when bob && export !== && ? = 0.5 point
// bob !== expert = 0 point
// to log the points we need a counter
// filter? or (double) for loop
// includes() - boolean

//TRIAL 1 - brings back empty array
// function correctness(bobsDecisions, expertDecisions) {
//   let checked = bobsDecisions.filter((letter) => !expertDecisions.includes(letter))
//   return checked
// }

// TRIAL 2 - get back 0
// function correctness(bobsDecisions, expertDecisions) {
//   counter = 0
//   if (bobsDecisions === expertDecisions) {
//     counter += 1
//   } else if (bobsDecisions !== expertDecisions && "?" === "guessed") {
//     counter += 0.5
//   } else {
//     counter += 0
//   }
//   return counter
// }
