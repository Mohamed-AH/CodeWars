function divisibleBy(numbers, divisor) {
  return numbers.filter((c) => c % divisor == 0);
}