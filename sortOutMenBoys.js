//https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

function menFromBoys(arr) {
  const men = arr.filter(num => num % 2 === 0 )
  const boy = arr.filter(num => num % 2 !== 0)
  console.log(men)
  console.log(boy)

  const menAsc = men.sort(function (a, b) {
    return a - b;
  })
  console.log(menAsc)

  const boyDesc = boy.sort(function (a, b) {
    return b - a;
  })
  console.log(boyDesc)

  const menBoy = menAsc.concat(boyDesc)
  const menBoyFil = menBoy.filter((num, index, arr2) => num !== arr2[index - 1])
  console.log(menBoyFil)
}

menFromBoys([1, 2, 5, 9, 9, 100])


// [1, 2, 3, 4, 5]

  //grab my array and filter it for even(men) and uneven(boyr)
  //even(men) would be calc men % 2 = 0
  //unevent(boys) would be calc boys % 3 = 1
  //once we have even from uneven seperated we can set the evens first in ascending order
  // then boys(uneven) come after evens in descending list
  // filter out any duplicates

// men are even 2-4-6-8
//boys - uneven 1-3-5-7-9
//need to seperate the men(even) from the boys(uneven) - 
//returm array with event first evens then odd - array list min. 4
// men(even) ascending
//boys(uneven) descending
//array mix of pos and neg  AND no 0
//repitition YES -yet no duplications when separating
//modules % - .sort and .filter