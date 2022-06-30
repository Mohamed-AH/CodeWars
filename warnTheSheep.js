function warnTheSheep(queue) {
  let ind = queue.indexOf("wolf");
  return queue.length - 1 - ind
    ? `Oi! Sheep number ${
        queue.length - 1 - ind
      }! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep";
}