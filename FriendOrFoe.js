// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript 

function friend(friends) {
  let buddy = friends.filter((fr) => {
    return fr.length === 4
  })
  return buddy
}


//   newFr = []
//   for (let i = 0; i < friends.length; i++){
//     if [i].length === 4
//     newFr[i]
//   }
// }

//filter a list of strings and return a list with only friends name
//name is 4 letters == it is friend
//name not 4 letters == not friend
// filter()
// len() === 4
// i have a list of strings
