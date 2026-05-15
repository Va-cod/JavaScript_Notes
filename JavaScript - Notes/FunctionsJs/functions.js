// FUNCTIONS 
// Functions allow us to group instructions and reuse code.

// FUNCTION WITHOUT return
function myFunction(num1, num2) {
    console.log(`Addition: ${num1 + num2}`);    // Add the two numbers and print the result
}
myFunction(10, 20);                             // Call the function and send two arguments

// FUNCTION WITH return
function newFunction(num1, num2) {    
    return `Addition: ${num1 + num2}`;          // return sends the value back to where the function was called
}
// Save the returned value in a variable
let addition = newFunction(1, 2);
// Print the returned value
console.log(addition);


// DIFFERENCE BETWEEN console.log() AND return

// console.log()
// -> Displays information directly in the console
// -> Does not save the result

// return
// -> Sends back a value
// -> Allows us to save the result in a variable
// -> Makes the function reusable