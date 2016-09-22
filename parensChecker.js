function parensChecker(string) {
  var parens = 0;

  for(var i = 0; i < string.length; i++) {
    if (parens < 0) {
      return false;
    }
    if (string[i] === '(') {
      parens += 1;
    }
    if (string[i] === ')') {
      parens -= 1;
    }
  }

  return parens === 0 ? true:false;
}

console.log(parensChecker("()(((())))"));   //->true
console.log(parensChecker("())))("));       //->false
console.log(parensChecker(")("));           //->false
console.log(parensChecker("())))())("));    //->false
console.log(parensChecker("())(()"));       //->false


/* ********************************************************************** */
/* ********************************************************************** */

function parenthesisChecker(parens){
  var opens = 0;
  var closes = 0;
  var result;

  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      opens++;
    } else if (parens[i] === ')') {
      closes++;
    }

    if (parens[0] === '(' && parens[parens.length -1] === ')' && opens === closes){
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result);
  return result;
}

console.log(parenthesisChecker("()(((())))"));   //->true
console.log(parenthesisChecker("())))("));       //->false
console.log(parenthesisChecker(")("));           //->false
console.log(parenthesisChecker("())))())("));    //->false
console.log(parenthesisChecker("())(()"));       //->false
