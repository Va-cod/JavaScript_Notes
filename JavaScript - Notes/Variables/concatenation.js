// CONCATENATION IN JAVASCRIPT

// Concatenation means joining or combining values.
// Usually, strings are combined using the + operator.

// Variables
let firstName = "Carlos";
let lastName = "Sainz";

// Concatenating two strings
let fullName = firstName + " " + lastName;

// Printing the result
console.log("Full Name:", fullName);

// CONCATENATING STRINGS AND NUMBERS

// Number variable
let age = 30;

// JavaScript automatically converts the number
// into a string when using + with text.
let message = "Driver Age: " + age;

// Printing the result
console.log(message);

// CONCATENATING MULTIPLE VALUES

let country = "Spain";
let team = "Williams Racing";

// Combining several variables in one sentence
let driverInfo =
  firstName + " " +
  lastName + " is from " +
  country + " and drives for " +
  team;

// Printing the complete sentence
console.log(driverInfo);


// CONCATENATION WITH TEMPLATE LITERALS

// Template literals use backticks (` `)
// and ${variable} to insert values easily.

let modernMessage =
  `${firstName} ${lastName} is ${age} years old.`;

// Printing the result
console.log(modernMessage);

// DIFFERENCE BETWEEN + WITH NUMBERS

// Adding numbers
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // 15

// Concatenating strings
console.log("10" + "5"); // 105

// Mixing string and number
console.log("Age: " + 30); // Age: 30