function powersOfTwo(n) {
  let res = [1];
  for (i = 1; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res;
}