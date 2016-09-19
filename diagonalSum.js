function diagonalSum(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i][i];
  }
  return sum;
}

var square1 = [[1, 0, 0, 0],
[0, 1, 0, 0],
[0, 0, 1, 0],
[0, 0, 0, 1]];

var square2 = [[2, 5, 1, 3, 9],
[4, 1, 3, 0, 8],
[1, 0, 9, 7, 6],
[1, 7, 7, 3, 0],
[3, 3, 8, 2, 4]];

console.log(diagonalSum(square1));
console.log(diagonalSum(square2));

/* ***************************************************************************** */
/* ***************************************************************************** */

'use strict'
const diagSum = (square) => square.reduce((sum, row, i) => sum + row[i], 0)

let square = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]
console.log(diagSum(square))
square = [
  [2, 5, 1, 3, 9],
  [4, 1, 3, 0, 8],
  [1, 0, 9, 7, 6],
  [1, 7, 7, 3, 0],
  [3, 3, 8, 2, 4]
]
console.log(diagSum(square))
