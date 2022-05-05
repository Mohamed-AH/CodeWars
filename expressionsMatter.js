function expressionMatter(a, b, c) {
  let sum = a + b + c
  
  let product = a * b * c
  
  let braces = (a + b) *c
  
  let braces2 = a*(b+c) 
  
  return Math.max(sum,product,braces,braces2)
}