function findNeedle(haystack) {
  // your code here
const isNeedle = (element) => element == 'needle';

const indexPosition =haystack.findIndex(isNeedle);

console.log(indexPosition)
if (indexPosition == -1)
{
  return('Needle not found')
}
else 
{
  return(`found the needle at position ${indexPosition}`)
}
}