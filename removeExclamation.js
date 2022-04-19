function removeExclamationMarks(s) {
  let p = Array.from(s).filter(isExclam);
  return p.join("");
}

function isExclam(x) {
  if (x == "!") return 0;
  else return 1;
}