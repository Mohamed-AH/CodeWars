function noBoringZeros(n) {
  while (n && n % 10 === 0) {
    n /= 10;
  }
  return n;
}