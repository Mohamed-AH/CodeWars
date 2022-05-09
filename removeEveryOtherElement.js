function removeEveryOther(arr) {
  let crr = [];
  for (i = 0; i < arr.length; i += 2) {
    crr.push(arr[i]);
  }
  return crr;
}