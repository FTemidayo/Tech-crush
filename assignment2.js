// Substring & Slice
const str = "Nigeria is awesome";
console.log(str.substring(0, 7));
console.log(str.slice(11, 18));
console.log(str.slice(8, 10));

//Split
const names = "John,Jane,Doe";
console.log(names.split(","));
console.log(names.split(" "));

const path = "/user/home/docs";
const slash = path.split("/")
console.log(slash)
console.log(slash[2])

//Mix
const email = "user-@-example-.com";
const splitEmail = email.split("-")
console.log(splitEmail[0])
console.log(email.endsWith(".com"))
console.log(email.replace("@", "AT"))



