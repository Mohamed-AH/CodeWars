// Sum Numbers
function sum(numbers) {
  "use strict";
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}