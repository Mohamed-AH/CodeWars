function points(games) {
  let counter = 0;
  games.forEach((x) =>
    x[0] > x[2] ? (counter += 3) : x[0] < x[2] ? (counter += 0) : (counter += 1)
  );
  return counter;
}