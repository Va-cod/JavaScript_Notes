// CONDITIONALS - EXAMPLES
console.log("\nCONDITIONALS");


// EXAMPLE #1
console.log("\nEXAMPLE #1");

let condition = true;
if (condition) {
    console.log(`The condition is: ${condition}`);
}
else {
    console.log("The condition should be false");
}


// EXAMPLE #2
console.log("\nEXAMPLE #2");
age = 20;

// Check different conditions
if (age < 18) {
    // This block runs if the condition is true
    console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
    // This block runs if the first condition is false
    // and this condition is true
    console.log("You are an adult.");
} else {
    // This block runs if none of the previous conditions are true
    console.log("You are a senior adult.");
}

// Print the age
console.log(`Age: ${age}`);


// EXAMPLE #3
console.log("\nEXAMPLE #2");

let dayHour = 5;
let message;

if (dayHour >= 6 && dayHour <= 11) {
    message = "Good Morning";
} else if (dayHour > 11 && dayHour <= 18){
    message = "Good afternoon";
} else if (dayHour > 18 && dayHour <= 24){
    message = "Good night";
} else if (dayHour >= 1 && dayHour <= 5){
    message = "Sleeping";
} else {
    message = "Error value";
}

console.log("Message: " + message);

// ESTRUCTURA SWITCH
console.log("\nESTRUCTURA SWITCH")

let number = 9;
let text;

switch(number) {
    case 1:
        text = `Number: ${number}`;
        break
   case 2:
        text = `Number: ${number}`;
        break;
   case 3:
        text = `Number: ${number}`;
        break;
   case 4:
        text = `Number: ${number}`;
        break;
   case 5:
        text = `Number: ${number}`;
        break;
    default:
        text = `Error value`
}

console.log(text)