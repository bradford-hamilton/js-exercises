//input is a string
//output is true or false if palidrome


/* ========================================================================== */

function palindrome(phrase) {
  phrase = sanitize(phrase);
  if (phrase[0] != phrase[phrase.length - 1]) {
    return false;
  }
  return phrase === reverse(phrase);
}

function reverse(string) {
  /* another way to reverse - more efficient */
  // var revString = '';
  // for (var i = string.length - 1; i >=0; i--) {
  //   revString += string[i];
  // }
  // return revString;
  return string.split('').reverse().join('');
}

function sanitize(string) {
  return string.toLowerCase().replace(/\s/g, '');
}

console.log(palindrome("poop"));
console.log(palindrome("Alula"));
console.log(palindrome("A but tuba"));
console.log(palindrome("Not a palindrome"));




/* ========================================================================== */

const checkPalindrome = (input) =>
  sanitizeString(input) === reverseString(sanitizeString(input))

const sanitizeString = (input) =>
  input.toLowerCase().replace(/[^a-z]/ig, '')

const reverseString = (input) =>
  input.split('').reverse().join('')

console.log(checkPalindrome('anna'))
console.log(checkPalindrome('banana'))
console.log(checkPalindrome('I, man, am regal - a German am I'))
console.log(checkPalindrome('No lemons, no melon'))
console.log(checkPalindrome('Was it a car or a cat I saw?'))
console.log(checkPalindrome('Probably not a palindrome'))
