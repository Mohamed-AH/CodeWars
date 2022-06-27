function generateRange(min, max, step){
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}