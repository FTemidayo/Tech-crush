//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

let str = "  Hello, World!   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let signupName = " Fathia"
let signinName = "Fathia"

if( (signupName.trim())  === signinName){
    console.log("Welcome back, Fathia!")
}else {
    console.log("Invalid login information")
}

//indexOf and includes
//return type for index is a number while includes is a Boolean
let user_email = "temmyde@gmail.com"
let email_index = user_email.indexOf("@")
console.log(email_index)

let email_contains_at = user_email.includes("@")
console.log(email_contains_at)

//startsWith and endsWith
let userName = "techCrush Fathia 6"
let starts = userName.startsWith("techCrush") //return datatype : boolean
console.log(starts)

let ends = userName.endsWith("6") // return datatype : boolean
console.log(ends)

//slice and substring
let testString = "My name is Fathia!"
let slicedString = testString.slice(-5)
let substringString = testString.substring(-5)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll
let text = "Fathia is a techie. Fathia loves teaching and Fathia loves coding"
let replacedText = text.replace("Fathia", "She")
let replacedAllText = text.replaceAll("Fathia", "She")
console.log(replacedText)
console.log(replacedAllText)


//classwork
let Msg = " Hello, WORLD! ";
let trimmedMsg = Msg.trim()
let frontTrimmedMsg = Msg.trimStart()
let endTrimmedMsg = Msg.trimEnd()
console.log(trimmedMsg)
console.log(frontTrimmedMsg)
console.log(endTrimmedMsg)





//split
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentence = sentence.split(" ") //return datatype : array
console.log(splitSentence)