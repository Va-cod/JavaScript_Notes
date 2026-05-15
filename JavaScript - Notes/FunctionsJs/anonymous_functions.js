// ANONYMOUS FUNCTIONS - An anonymous function is a function without a name.

// EXAMPLE 1: Anonymous function saved in a variable
let greet = function(name) {
    console.log(`Hello, ${name}!`);
};
greet("Oscar Piastri");

// EXAMPLE 2: Anonymous function with return
let add = function(num1, num2) {
    return num1 + num2;
};

// Save the returned value
let result = add(10, 5);
console.log(`Addition result: ${result}`);

// IMPORTANT IDEA
// Anonymous functions are often used:
// - Inside variables
// - As arguments for other functions
// - In events and timers
// - In callbacks