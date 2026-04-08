//STRING (length)
let place = "California";
let girlName = "Olaibi Fathia";
console.log(place.length);
console.log(girlName.length);

//toUpperCase() AND toLowerCase()
let greeting = "Hello, my name is Temidayo";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting);

//trim(), trimStart() AND trimEnd()
let randomFact = "   Olaibi Fathia is a web developer   ";
console.log(randomFact.trim());
console.log(randomFact.trimStart());
console.log(randomFact.trimEnd());

//indexOf() AND includes()........indexOf returns numbers, includes returns a boolean
let email = "temmyde@gmail.com";
console.log(email.indexOf("@"));
console.log(email.indexOf(".com"));
console.log(email.indexOf("bolanle"));

let bio = "I am a fullstack developer from Lagos";
console.log(bio.includes("fullstack"));
console.log(bio.includes("backend"));
console.log(bio.includes("Lagos"));

//startsWith() AND endsWith
let bookName = "Eight_Perfect_Murders_By_Peter_Swanson_2020_pdf";
console.log(bookName.startsWith("Eight"));
console.log(bookName.startsWith("Murders"));
console.log(bookName.endsWith("Murders"));
console.log(bookName.endsWith("pdf"));

//slice() AND substring()
let fullName = "Olaibi Fathia Temidayo";
console.log(fullName.slice(0, 7));
console.log(fullName.slice(12));  //from index 10 to the end
console.log(fullName.slice(0, 15));
console.log(fullName.substring(0, 7));

//replace() AND replaceAll()
let message = "I love Los Angeles. Los Angeles is amazing. Los Angeles is fun.";
console.log(message.replace("Los Angeles", "London")); //replaces the first match
console.log(message.replaceAll("Los Angeles", "London")); //replaces all matches

let phone = "07089840114";
let masked = phone.replace("898401", "******");
console.log(masked);

//split()
let courses = "JavaScript, Python, HTML, CSS, React, Node.js, MongoDB";
let courseList = courses.split(",");
console.log(courseList);

let statement = "Backend development is awesome";
console.log(statement.split(" "));

console.log("Fathia".split(""));

//padStart(), padEnd() AND repeat()
let id = "85";
console.log(id.padStart(10, "0"));
console.log(id.padEnd(8, "-"));

let star = "* ";
console.log(star.repeat(7));

let line = "=";
console.log(line.repeat(15));

//Number Methods and the Math Object

//Numbers in JavaScript
let price = 3599.99;
let big = 9_000_000;
let herAge = 25;
let negative = -300;

console.log(typeof herAge);
console.log(typeof price);

//toFixed() AND toPrecision()...they always return a STRING, not a number.
let bookPrice = 1499.5679;
console.log(bookPrice.toFixed(2));
console.log(bookPrice.toFixed(0));
console.log(bookPrice.toFixed(4));

let tax = 0.1 + 0.2;
console.log(tax.toFixed(2));

let num = 123.456;
console.log(num.toPrecision(5));
console.log(num.toPrecision(4));
console.log(num.toPrecision(2));   //REVERT!!!!!

let small = 0.00456;
console.log(small.toPrecision(2));

//parseInt()... converts to a whole number (ignores decimals)
console.log(parseInt("50"));
console.log(parseInt("50.5"));
console.log(parseInt("50px"));
console.log(parseInt("hello"));

//parseFloat()... converts to a decimal number
console.log(parseFloat("50"));
console.log(parseFloat("50.09"));
console.log(parseFloat("50.5kg"));

//Number()... converts strictly (no partial conversion)
console.log(Number("100"));
console.log(Number("3.14"));
console.log(Number("42px"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));

//isNan()... returns TRUE if the value is NOT a valid number
console.log(isNaN("hello"));
console.log(isNaN(42));
console.log(isNaN("42"));
console.log(isNaN(0/0));

//Number.isNaN is stricter:
console.log(Number.isNaN("hello"));

//isFinite()... returns TRUE if the value is a real, finite number
console.log(isFinite(42));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite("100"));

//The Math Object

//Math.round()... rounds UP to the nearest whole number
console.log(Math.round(4.7));
console.log(Math.round(4.4));

//Math.floor()... rounds DOWN to the nearest whole number
console.log(Math.floor(4.7));
console.log(Math.floor(-1.2));

//Math.round()... rounds up to the nearest whole number ABOVE
console.log(Math.ceil(4.1));
console.log(Math.ceil(-1.8));

//Math.max()... returns the largest value
console.log(Math.max(191, 57, 48, 93, 98));
console.log(Math.max(47, 35, 57, 87, 89));

//Math.min()... returns the smallest value
console.log(Math.min(58, 48, 38, 98, 27));
console.log(Math.min(37, 23, 13, 44, 76));

//Math.abs()... returns the absolute (positive) value of a number
console.log(Math.abs(-47));
console.log(Math.abs(47));

//Math.random()\.... REVERTTT!!!!!
console.log(Math.random());
let rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);


//Math.pow(base, exp)
console.log(Math.pow(2, 12));
console.log(Math.pow(3, 4));
console.log(Math.pow(5, 3));

//Math.sqrt() and Math.PI
console.log(Math.sqrt(36));
console.log(Math.sqrt(144));

console.log(Math.PI);