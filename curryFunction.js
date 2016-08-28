/* ***********************************************************
Curry function
Define a JavaScript function add that can be used like so:

add(1)(1);   // returns 2
add(20)(20); // returns 40
add(100)(5); // returns 105
add(40)(2); // returns 42

*********************************************************** */

function add(num1) {
  return function(num2) {
    return num1 + num2;
  };
}
