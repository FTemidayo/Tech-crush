let item1 = "milk"
let item2 = "milo"
let item3 = "rice"

let items = ["milk", "milo", "rice", 1 , 2, 3, true]

console.log(items[0])
console.log(items.length)

//forEach
let names = ["Fathia", "John"]

names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6 " + name)
})

let fruits = ["apple", "banana", "orange", "grape", "mango"]

fruits.forEach(function(fruit) {
    console.log("I eat " + fruit)  
})

//map methods
let scores = [90, 80, 70, 60, 50]
let newScores = scores.map( x => {
    console.log("as a good teacher , I decided to add 5 marks for all my students")
    return x + 5
}) //arrow function
console.log(newScores)

let students = ["Esther", "John", "Fathia", "Doe"]
let nameTag = students.map(tag => {
    return"TECH_CRUSH_2026_COHORT_6 " + tag
})
console.log(nameTag)

//filter method