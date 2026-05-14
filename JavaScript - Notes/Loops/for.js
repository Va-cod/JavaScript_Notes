// FOR LOOP
// i starts at 0
// The loop runs while i is less than 5
// i++ increases the value by 1 in each repetition
for(let i = 0; i < 5; i++) {
    console.log(`Counter: ${i}`);       // Print the current value of i
}
console.log("End of For loop\n");         // This line runs after the loop finishes


// FOR LOOP WITH IF CONDITION
// The loop goes from 0 to 10
for(let i = 0; i <= 10; i++) {
    // Only numbers from 0 to 4 are printed
    if (i <= 4) {
        console.log(`Counter: ${i}`);
    }
}
console.log("End of For loop\n");           // Message after the loop ends


// FOR LOOP WITH CONTINUE
// The loop goes from 0 to 10
for(let i = 0; i <= 10; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        continue;                           // Skip odd numbers
    } else {
        console.log(`Counter: ${i}`);       // Print only even numbers
    }
}
console.log("End of For loop");             // Final message after the loop

