function sumStr(a, b) {
  console.log(`${a} & ${b}`);
  if (a == "") {
    a = 0;
  }
  if (b == "") {
    b = 0;
  }
  console.log(`${a} & ${b}`);
  let c = +a + +b;
  return String(c);
}