function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}