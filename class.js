//Iterating over Objects\
const user = {
    name: "Fathia",
    password: "12345",
    isFemale: true,
    city: "Lagos",
    age: 23
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

/*
//for in
for (let key in user) {
    console.log("these are the keys: " + key)
    console.log("these are the values: " + user[key])
}

for (let values in user) {
    console.log(values)
    console.log("these are the values: " + user[values])
}
*/

//Error Handling
