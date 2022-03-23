function sumMix(x) {
  let arr = new Int32Array(x);

  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial;
}