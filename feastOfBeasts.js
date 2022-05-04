function feast(beast, dish) {
  return (beast[0] == dish[0] && beast.charAt(beast.length-1) == dish.charAt(dish.length-1)) ? true : false
}