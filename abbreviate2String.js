function abbrevName(name){

const nameArray = name.split(" ")

return `${nameArray[0][0].toUpperCase()}.${nameArray[1][0].toUpperCase()}`
}


function abbrevName(name){
const f = name[0]
const ts = name.split(" ").pop()
const s = ts[0]
return `${f.toUpperCase()}.${s.toUpperCase()}` 
}