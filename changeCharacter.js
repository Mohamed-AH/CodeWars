function correct(string) {
  return Array.from(string).map(a => ({'0':'O','1':'I','5':'S'})[a]||a).join("")
}