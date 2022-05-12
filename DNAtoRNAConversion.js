function DNAtoRNA(dna) {
  let newstr = dna.replace(/T/g, "U");
  return newstr;
}