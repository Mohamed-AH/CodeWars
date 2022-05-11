const reverseSeq = (n) => {
  let z = n;
  let k = [];
  for (let i = 0; i < n; i++) {
    k[i] = z;
    z--;
  }
  return k;
};