function correctTail(body, tail) {
  
  sub = body.substr(body.length-(tail.length))
  
  if (sub == tail) 
  {
    return true
  }
  else 
    return false
  
}