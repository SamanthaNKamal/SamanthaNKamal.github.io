// Lecture 4 code for javascript testing
console.log('Hello World');

let firstName = 'Bill'; // String literal
let lastName = 'Farmer';

console.log(firstName);

const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

let age = 30; //Number literal
console.log(age)
let isApproved = true; // Boolean literal
console.log(isApproved)
let address = undefined;
console.log(address)
let phoneNumber = null;
console.log(phoneNumber)
age = null;
console.log(age)

let person = {
    firstName: 'Bill',
    lastName: 'Farmer',
    age: 30
};

console.log(person.firstName);

person.firstName = 'Jerry';
console.log(person.firstName);
person['firstName'] = 'Susan';
console.log(person.firstName);

let selection = 'lastName';
person[selection] = 'Fischer';
console.log(person.firstName);
console.log(person[selection]);

let groceryList = ['apples','crackers'];
console.log(groceryList);
console.log(groceryList[0]);
groceryList[2] = 'bananas';
console.log(groceryList);
groceryList[3] = 42;
console.log(groceryList);

console.log(groceryList.length);
