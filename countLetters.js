// count the letters in a string.
// Input: A string - like "Hello World"
// Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

function countLetters(str) {
  var results = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 &&  str.charCodeAt(i) <= 122) {
      if (results[str[i]] > 0) {
        results[str[i]] += 1;
      }
      else {
        results[str[i]] = 1;
      }
    }
  }

  return JSON.stringify(results);
}

console.log(countLetters("Hello World"));


/* ******************************************************************* */
function countChars(str){
    var result = {};
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i += 1){
        if(str.charAt(i) !== ' ' && str.charAt(i) !== '.'){
            if(result.hasOwnProperty(str.charAt(i))){
                result[str.charAt(i)] += 1;
            }else{
                result[str.charAt(i)] = 1;
            }
        }
    }
    var letters = '';
    for(var key in result){
        letters += key + ':' + result[key] + ',  ';
    }
    console.log(letters);
}

countChars('The quick brown fox jumps over the lazy dog.');
