function remove(string) {
  let le = string;
  if (string[string.length - 1] == "!") {
    le = string.slice(0, -1);
  }
  return le;
}