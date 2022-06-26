function generateRange(min, max, step){
let res = []
  for (i=min;i<=max;i+=step){
  res.push(i)
}
return res
}