function digitize(n) {
   
  return Array.from(n.toString()).reverse().map(Number);
}