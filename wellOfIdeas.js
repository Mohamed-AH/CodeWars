function well(x) {
  let c = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] == "good") {
      c++;
    }
  }
  return !c ? "Fail!" : c > 2 ? "I smell a series!" : "Publish!";
}