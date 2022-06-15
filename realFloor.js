function getRealFloor(n) {
  return n < 0 ? n : n < 2 ? 0 : n < 13 ? n-1 : n -2
}