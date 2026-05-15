// ARRAYS IN JAVASCRIPT
// An array allows us to store multiple values in a single variable.

// Create an array with racing team names
let racingTeams = ["McLaren", "Mercedes", "Cadillac", "Red Bull", "Williams"];

// Print the complete array
console.log("Complete array:");
console.log(racingTeams);

// Access elements using their index
// Remember: indexes start at 0
console.log(`\nFirst item: ${racingTeams[0]}`);
console.log(`Second item: ${racingTeams[1]}`);

// Change the value of an element
// Here we replace "Red Bull" with "Ferrari"
racingTeams[3] = "Ferrari";

console.log("\nArray after changing one item:");
console.log(racingTeams);

// Add new elements to the end of the array with push()
racingTeams.push("Aston Martin", "Alpine");

console.log("\nArray after push():");
console.log(racingTeams);

// Remove the last element of the array with pop()
racingTeams.pop();

console.log("\nArray after pop():");
console.log(racingTeams);

// Get the number of elements in the array
let lengthArray = racingTeams.length;

console.log(`\nLength of the array: ${lengthArray}`);

// Loop through the array using a traditional for loop
// We use the index to access each element
console.log("\nUsing a for loop:");

for (let index = 0; index < racingTeams.length; index++) {
    console.log(`${index}: ${racingTeams[index]}`);
}

// Loop through the array using for...of
// This loop directly gives us each value
console.log("\nUsing for...of:");

for (let team of racingTeams) {
    console.log(team);
}

// Check the type of the array
// typeof returns "object" because arrays are special objects in JavaScript
console.log("\nType of racingTeams:");
console.log(typeof racingTeams);

// Check if the variable is really an array
console.log("\nUsing Array.isArray():");
console.log(Array.isArray(racingTeams));

// Another way to check if it is an array
console.log("\nUsing instanceof Array:");
console.log(racingTeams instanceof Array);