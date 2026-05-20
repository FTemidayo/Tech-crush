var myName = "Fathia"
let myAge = 23
const myHeight = 5.9


//var , you can use it when the value can change and you want to reassign it later in the code
var myName = "John"
console.log(myName)


// let myAge = 24
// console.log(myAge)variable assignment

//const myHeight = 6.0
// console.log(myHeight)

//variable assignment
myName = "Adina"


//Primitive Data Types: String, Number, Boolean, Null, Undefined
let myString = "Hello, World"
let myNumber = 42
let myBoolean = true
console.log(myString)
console.log(myNumber)
console.log(myBoolean)


/*
//Question 1: Using the map method, create a new array where each number is doubled
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2)
console.log(doubledNumbers);

//Question 2: Return scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160];
const highScores = scores.filter(score => score >= 300);
console.log(highScores)

//Question 3: Get the sum of all items in the array
const sum = [2000, 3000, 400, 100, 600];
const totalSum = sum.reduce((acc, currentValue)) => acc + currentValue, 0
console.log(totalSum);

//Question 4: Add "green" to the end of the array and remove "red" from the array
const colors = ["blue", "yellow", "red"]
colors.push("green");
const redIndex = colors.indexOf("red");
colors.splice(redIndex, 1);
console.log(colors);

//random
let obj = {
    name : "Esther",
    age : 25,
    profession : "Developer",
}
let student = {
    name: "Ngozi Adeyemi",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
};
console.log(student.name)
console.log(student["age"])

let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};
let newName = employee.name
let newRole = employee.role
const {name  , salary } = employee
console.log(name)
console.log(salary)

*/