// reverse a string

/* ************************************************************* */

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString("bradford");

/* ************************************************************* */

function strReverse(string) {
	newArr = [];
	arr = string.split('');
	for (var i = string.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr.join('');
}

strReverse("bradford");

/* ************************************************************* */

//using recursion
function stringReversal(str) {
  if(str.length <= 1) {
    return str;
  }
  return stringReversal( str.substring(1) ) + str.charAt(0);
}

stringReversal("bradford");
