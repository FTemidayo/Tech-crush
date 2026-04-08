let str = "Coding is fun"
//extract the word "Coding"
let word = str.slice(0, 6)
console.log(word)

let fun = str.substring(10, 13)
console.log(fun)

let is = str.substring(7, 9)
console.log(is)

//challenge 2
const colors = "red, green, blue, yellow";
const comma = colors.split(",")
console.log(comma)
const joined = comma.join(" - ")
console.log(joined)

//challenge 3
const url = "/api/v1/users";
const slash = url.split("/")
console.log(slash)
console.log(slash[2])

/*
const v1Index = slash[2]
console.log(v1Index)
*/

//challenge 4: extract only "FATHIA"
const matricNumber = "TECHCRUSH-FATHIA-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric)
console.log(splitMatric[1])


