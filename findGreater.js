function findGreater(array, num) {
  return array.filter(function(element) {return element > num;});
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));

/* ******************************************************************* */
/* ******************************************************************* */

function findGreaterValues(array, value){
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if(array[i] > value) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(findGreaterValues([1, 2, 3, 4, 5, 6,7, 8], 5));

/* ******************************************************************* */
/* ******************************************************************* */

const findGreaterNumbers = (array, pivot) => array.filter(v=>v>pivot)

console.log(findGreaterNumbers([1,2,3,4,5,6,7,8], 5))
