function between(a, b) {
  let c = [];
  let d = b - a;
  for (i = 0; i <= d; i++) {
    c[i] = a;
    a++;
  }
  console.log(c);
  return c;
}