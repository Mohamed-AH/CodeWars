function howMuchILoveYou(nbPetals) {
  let ch = 0;
  if (nbPetals > 6) {
    ch = nbPetals % 6;
    console.log(`${ch} for ${nbPetals}`);
  } else ch = nbPetals;
  switch (ch) {
    case 1:
      return "I love you";
      break;
    case 2:
      return "a little";
      break;
    case 3:
      return "a lot";
      break;
    case 4:
      return "passionately";
      break;
    case 5:
      return "madly";
      break;
    case 6:
      return "not at all";
      break;
    case 0:
      return "not at all";
      break;
    default:
      return "I love you";
      break;
  }
}