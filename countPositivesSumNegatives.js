function countPositivesSumNegatives(input) {
  let arrayResult = [];
  let countPositive = 0;
  let sumNegative = 0;
  if (input === null || input.length == 0) {
    return arrayResult;
  } else countPositive = input.filter((x) => x > 0).length;
  sumNegative = input.filter((y) => y < 0).reduce((a, b) => a + b, 0);
  arrayResult = [countPositive, sumNegative];
  return arrayResult;
}