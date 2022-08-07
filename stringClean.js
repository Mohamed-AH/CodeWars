function stringClean(s){
// for (i=0;i<s.length;i++){
//   //console.log(s[i])
// console.log( Number.isInteger(s[i]))
//   if (Number.isInteger(s[i])){
//     s[i].pop()
//     console.log('l')
//   }
// }
  
  return s.split('0').join('').split('1').join('').split('2').join('').split('3').join('').split('4').join('')
.split('5').join('').split('6').join('').split('7').join('').split('8').join('').split('9').join('')
  }