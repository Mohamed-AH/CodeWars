function rentalCarCost(d) {
  return d <= 2 ? 40 * d : d < 7 ? 40 * d - 20 : 40 * d - 50;
}