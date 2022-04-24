function firstNonConsecutive(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i + 1] - arr[i]);
    if (arr[i + 1] - arr[i] > 1) {
      console.log("h");
      return arr[i + 1];
    }
  }
  return null;
}