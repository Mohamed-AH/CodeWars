function findMultiples(integer, limit) {
  let res = []
  let nextVal =0
  let i = 1
do
 {
   res.push(integer*i)
   i++
   nextVal = integer*i
 }  while( nextVal <= limit)
return res
}