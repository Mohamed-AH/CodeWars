function pipeFix(numbers) {
  let res = [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  for (i = min; i <= max; i++) {
    res.push(i);
  }
  return res;
}