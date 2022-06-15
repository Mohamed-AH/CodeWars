function capitalizeWord(word) {
  let temp = word[0].toUpperCase();
  for (i = 1; i < word.length; i++) {
    temp += word[i];
  }
  return temp;
}