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

/* ******************************************************** */

// function that can add 2 arguments either (x, y) OR (x)(y)
function add() {
  if ( arguments.length === 2 ) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) {
      return x + y;
    };
  }
}
