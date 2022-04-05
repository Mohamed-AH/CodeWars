function fakeBin(x) {
  let tempResult = Array.from(x);
  for (let i = 0; i < tempResult.length; i++) {
    if (tempResult[i] >= 5) {
      tempResult[i] = 1;
    } else {
      tempResult[i] = 0;
    }
  }
  return tempResult.join("");
}