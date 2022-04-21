function sumArray(array) {
  const arr = array || [];
  if (arr === null) {
    return 0;
  } else if (arr.length < 3) {
    return 0;
  } else arr.sort((a, b) => a - b).pop();
  arr.sort((a, b) => b - a).pop();
  return arr.reduce((a, b) => a + b, 0);
}