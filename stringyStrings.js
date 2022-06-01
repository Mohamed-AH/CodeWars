function stringy(size) {
  let binaryNumber = "1";
  for (i = 1; i < size; i++) {
    if (i % 2 == 0) {
      binaryNumber += "1";
    } else binaryNumber += "0";
  }
  return binaryNumber;
}