function disemvowel(str) {
  let mtr = Array.from(str).filter(isVowel);
  return mtr.join("");
}
function isVowel(x) {
  if (
    x == "a" ||
    x == "A" ||
    x == "e" ||
    x == "E" ||
    x == "i" ||
    x == "I" ||
    x == "o" ||
    x == "O" ||
    x == "u" ||
    x == "U"
  )
    return 0;
  else return 1;
}