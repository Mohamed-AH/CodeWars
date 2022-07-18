function getSize(width, height, depth) {
  let surfaceArea = 2 * width * height + 2 * width * depth + 2 * height * depth;
  return [surfaceArea, width * height * depth];
}