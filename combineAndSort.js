function combineAndSort(array1, array2) {
  return array1.concat(array2).sort();
}

console.log(combineAndSort([ "cat", "dog", "fish", "zebra" ], ["lion", "aardvark", "gorilla"]));


var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ];

function comboSort( array1, array2 ) {
  for (var i = 0; i < array2.length; i++) {
    array1.push( array2[i] );
    array1.sort();
  }

  console.log( array1 );
}

comboSort( array1, array2 );
