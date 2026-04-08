//TASK 1
let customerName = "Temidayo";
let customerAge = 23;
let bookTitle = "Eight Perfect Murders";
let bookPrice = 13500;
let quantity = 5;
let isCustomerAStudent = true


//TASK 2
let totalPrice = bookPrice * quantity;


// TASK 3
let isAdult = customerAge > 18;
let buyingManyBooks = quantity > 3;
let isBookFiveThousand = bookPrice === 5000;

//TASK 4
const customerOrder = {
    customerName: customerName,
    bookTitle: bookTitle,
    quantity: quantity,
    totalPrice: totalPrice
};

console.log(customerOrder.totalPrice);

//TASK 5
console.log("Customer name: " + customerName);
console.log("Book Title: " + bookTitle);
console.log("Total Price: " + totalPrice);
console.log("Is Customer an Adult: " + isAdult);
console.log("Buying More Than 3 Books: " + quantity);
console.log("Is Book Price 5000: " + bookPrice);