const flip=(d, a)=>{
  return d == 'R' ? a.sort((a,b) => (a-b)) : a.sort((a,b) => (b-a))
}