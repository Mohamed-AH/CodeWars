function squareSum(numbers) {
  let sol = 0;
  for (let i = 0; i < numbers.length; i++) {
    sol += numbers[i] * numbers[i];
  }
  return sol;
}