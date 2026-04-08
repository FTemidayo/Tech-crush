//Practice

//let is used for values that might change while const is used for values that cannot be changed.

//Data types
const fullName = " Olaibi Fathia" //string
let age = 23 //number
let fees = true //boolean

//Operators
let price = 10000
let discount = 2000
let finalPrice = 10000 + 2000
console.log(finalPrice)

//Arithmetic Operators
console.log(15 % 4)

//Control Flow
let newAge = 21;
if (newAge >= 21) {
    console.log("You can drive!");
} else {
    console.log("You are not allowed to drive.");
}

let fixedAge = 17;
if (fixedAge >= 21) {
    console.log("You can drive!");
} else {
    console.log("You are not allowed to drive.");
}

let score = 75;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Grade: F - Please Revise!");
}

//Day of the week message
let day = "Monday";
switch (day) {
    case "Monday": console.log("New Week, Fresh Start!"); break;
    case "Friday": console.log("Almost the weekend!"); break;
    case "Saturday": console.log("It is the weekend! Rest up."); break;
    default: console.log("Keep going, midweek grind!");
}

// THE FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("Count:" + i);
} //Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// THE WHILE LOOP
let attempts = 0;
while (attempts < 3) {
    console.log("Attempt number:" + (attempts + 1));
    attempts++;
} //Runs 3 times, then stops because attempts is no longer less than 3

// THE FOR...OF LOOP
let students = ["Fathia", "Temidayo", "Damilare", "Abisola", "Akorede", "Famisayo"]; 
for (let student of students) {
    console.log("Welcome, " + student + "!");
} //Output: Welcome, Fathia! Welcome, Temidayo! ...

let scores = [90, 75, 58, 88, 43];
for (let score of scores) {
    if (score >= 90) {
        console.log(score + "-> Grade A");
    } else if (score >= 70) {
        console.log(score + "-> Grade B");
    } else if (score >= 50) {
        console.log(score + "-> Grade C");
    } else {
        console.log(score + "-> FAIL");
    }
}

// FUNCTIONS
function sayHello() {
    console.log("Hello, everyone!");
}
sayHello();

function greet(name) {
    console.log("Welcome, " + name + "!");
}
greet("Fathia");
greet("Famisayo");
greet("Temidayo");

// THE RETURN KEYWORD
function divideNumbers(a, b) {
    return a / b;
}
let result = divideNumbers(60, 15);
console.log(result);

function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(15));

function greet(name) {
    return "Hi " + name;
}
console.log(greet("Temidayo"));

const checkAge = (age) => {
    if (age >= 18) return "Adult";
    return "Minor";
}
console.log("Minor");

const getGrade = (score) => {
    if (score >= 90) return "A";
    else if (score >= 75) return "B";
    else if (score >= 60) return "C";
    else return "F";
}
const printResult = (name, score) => {
    const grade = getGrade(score);
    console.log(name + " scored " + score + ", Grade:" + grade);
}
printResult("Temidayo", 92);
printResult("Famisayo", 71);

