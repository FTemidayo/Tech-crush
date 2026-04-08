let item1 = "milk"
let item2 = "milo"
let item3 = "rice"
let items = ["milk" , "milo" , "rice" , 1 , 2 , 4 , true]
console.log(items[0])
console.log(items.length)
//forEach
let fruits = ["apple" , "banana" , "orange" , "grape" , "mango"]
let names = ["esther" , "john" , "doe" , "jane" , "smith"]
names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6 " + name) //named function
})
fruits.forEach(function(fruit){
    console.log("i eat "  + fruit)
})
//map methods
let scores = [90 , 80 , 70 , 60 , 50]
let newScores = scores.map( x => {
    // console.log("as a good teacher , i decided to add 5 marks to all my students")
     return x + 5
}) //arrow function
console.log(newScores)
let students = ["esther" , "john" , "doe" , "jane" , "smith"]
let nameTag = students.map(function(name){
    return "TECH_CRUSH_2026_COHORT_6 " + name
})
console.log(nameTag)

//filter method
let jambScores = [200, 250, 300, 150, 180, 280, 290, 100]
let passed = jambScores.filter((score)=>{
    return score >= 200
})
console.log(passed)


let ages = [18, 25, 30, 15, 20, 35, 40]
let adults = ages.filter(function(age){
    return age >= 18
})
console.log(adults)


//arrays
