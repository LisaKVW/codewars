// input
// [12, 6, 7, 20] -- values
// [2,  0, 3, 1] -- indexes

// swap(values, 0, 2)
// [7,  6, 12, 20] -- values
// [2,  0, 3,  1] -- indexes

// [6, 20, 12, 7] -- response

function swap(arr, i, j) { // i, j 
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp;
}

function returnValues(values, indexes) {
  //let result = [];
  for (let i = 0; i < indexes.length; i++) {
    // i =                   3
    let target = indexes[i] // 3
    if (i !== target) {
      swap(values, i, target)
      swap(indexes, i, target)
    }
  }

  return indexes;
}

let valResult = returnValues([12, 6, 7, 20], [2, 0, 3, 1]);

console.log(valResult);


//  COLLIN with parantheses

// a(b) - true
// )(c - false
// ()() - true
// (()) - true -- boonean?
// ()) - false
// abc - true
// ((())) - true
// ((()))) - false
// 

//   (((((   )()(    )))))

const checkParentheses = (string) => {

  const hasOpeningParen = string.indexOf("(") !== -1
  const hasClosedParen = string.indexOf(")") !== -1
  if (!hasOpeningParen && !hasClosedParen) return true




  let openParenCount = 0
  let closingParenCount = 0


  for (let i = 0; i < string.length; i++) {

    let currentChar = string[i]
    if (currentChar === "(") {
      openParenCount += 1
    }

    if (currentChar === ")") {
      closingParenCount += 1
    }

    if (closingParenCount > openParenCount) {
      return false
    }
  }


  if (openParenCount !== closingParenCount) {
    return false
  }

  return true
}



let result = checkParentheses("((( )()  )))")
console.log(result)

