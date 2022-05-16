var countSheep = function (num) {
  let co = "";
  if (num == 0) {
    co = "";
  } else {
    for (i = 1; i <= num; i++) {
      co += `${i} sheep...`;
    }
  }
  return co;
};