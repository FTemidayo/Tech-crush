//Tutorial 1
if (10 > 5)  {
    console.log("10 is greater than 5")
}

if (7 < 5)  {
    console.log("7 is less than 5")
}

if (7 < 5)  {
    console.log("7 is less than 5")
} else {
    console.log("The condition is false")
}

myName = "Olaibi Fathia"
console.log(myName)

let name = "Fathia"
if (true)  {
    console.log(name)
}

if (true) {
    var message = "JavaScript is awesome!"
}
console.log(message)

let firstValue = 3
console.log(++firstValue)

let secondValue = 5
console.log(secondValue++)
console.log(secondValue)

//concatenation
console.log("Hello" + " " + "Everyone")
console.log("James " + "Bond " + 0o7)
console.log (10 +" years from now" + " I'll be a 100 years old")

//assignment operators
let age = 10
console.log(age += 5)

console.log(age *= 5)

console.log(age /= 5)

console.log(age -= 5)

console.log(age %= 5)

//comparison operators
console.log(10 == 10)
console.log(10 != 6)
console.log(10 >= 11)
console.log(10 === 10)
console.log(10 === "10")
console.log(10 !== 9)

//logical operators
console.log(true && false)
console.log(false && false)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!false)

//Functions - still confusing!!!
function multiplyByTwo(value) {
   const result = value * 2
   return result
}

function multiplyByTwo(value) {
    if (isNaN(value)) {
        return " Value must be a number"
    }

    const result = value * 2
    return result
}

//toUpperCase
//let message = "Hello World"
//console.log(message.toUpperCase())
//console.log(message)

/*trim()
let message = " Hello World "
console.log(message.trim())
console.log(message.trim().toUpperCase())*/

function add(a, b) {
    return a + b;
}
let result = add(4,6);
console.log(result)

for (let i = 2; i <= 8; i += 2)
     { console.log(i); }