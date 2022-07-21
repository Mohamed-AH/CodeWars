function remove (string) {
  return string.endsWith('!') ? string.slice(0,-1) : string;
}