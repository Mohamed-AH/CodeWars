function swapValues() {
 var args = Array.prototype.slice.call(arguments)[0];
  [args[0], args[1]] = [args[1], args[0]];
 }