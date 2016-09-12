function upDown(array) {
  var myArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      if (array[i] > array[i - 1]) {
        myArray.push("up");
      }
      else if (array[i] < array[i - 1]) {
        myArray.push("down");
      }
      else {
        myArray.push("even");
      }
    }
  }
  return myArray;
}

console.log(upDown([6,3,5,4,3,4,4,5]));
