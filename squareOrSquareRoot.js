function squareOrSquareRoot(array) {
  let array2 = [];
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      array2[i] = Math.sqrt(array[i]);
    } else {
      array2[i] = array[i] * array[i];
    }
  }
  return array2;
}