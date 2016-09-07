function rampNumber(num) {
  numStr = num.toString();
  for (var i = 0; i < numStr; i++) {
    if (i !== 0) {
      if (numStr[i - 1] > numStr[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(rampNumber(112233344559));
console.log(rampNumber(111221155));
