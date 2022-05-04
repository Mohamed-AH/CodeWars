function enough(cap, on, wait) {
let extra = cap - (on + wait)
  return extra > 0 ? 0 : Math.abs(extra)
}