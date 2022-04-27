function updateLight(current) {
  let newLightColor = "";
  switch (current) {
    case "green":
      newLightColor = "yellow";
      break;
    case "yellow":
      newLightColor = "red";
      break;
    case "red":
      newLightColor = "green";
      break;
  }
  return newLightColor;
}