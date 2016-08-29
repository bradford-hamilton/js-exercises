function longestString(array) {
  var longestLength = 0;
  var longestString;
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if (longestLength < array[i].length) {
      longestLength = array[i].length;
      longestString = array[i];
    }
  }
  obj[longestString] = longestLength;
  return obj;
}

console.log( longestString(["truck", "sidewalk", "book", "dinasaurParty"]) );
