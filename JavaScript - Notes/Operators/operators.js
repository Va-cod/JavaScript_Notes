// OPERATORS

// Variables
const num1 = 10, num2 = 2;

// Addition (+)
let result = num1 + num2;
console.log("Addition: " + result);

// Subtraction (-)
result = num1 - num2;
console.log("Subtraction: " + result);

// MUltiplication (*)
result = num1 * num2;
console.log("Multiplication: " + result);

// Divition (/)
result = num1 / num2;
console.log("Division: " + result);

// Module (%)
result =  num1 % num2;
console.log("Module: " + result);

// Exponentiation (**)
result =  num1 ** num2;
console.log("Exponentiation: " + result);


// INCREASE AND DECREASE OPERATORS

// Variables
let numA = 20, numB = 12;
console.log(`\nnumA: ${numA} - numB: ${numB}`)

// INCREASE
// Pre-increase (++variable)
result = ++numA;
console.log("Pre-increase: " + numA);
console.log(result);

// Pos-increase (variable++)
result = numB++
console.log("Pos-increase: " + numB);
console.log(result);

// Variables
let numM = 20, numN = 12;
console.log(`\nnumM: ${numM} - numN: ${numN}`)

// DECREASE
// Pre-decrease (--variable)
result = --numM;
console.log("Pre-decrease: " + numM);
console.log(result);

// Pos-decrease (variable--)
result = numN--
console.log("Pos-decrease: " + numN);
console.log(result);


// OPERATOR PRECEDENCE IN JAVASCRIPT

// Multiplication has higher precedence than addition
let result1 = 5 + 3 * 2;

// JavaScript does:
// 3 * 2 = 6
// 5 + 6 = 11
console.log("\n" + result1); // 11

// Parentheses are executed first
let result2 = (5 + 3) * 2;

// JavaScript does:
// 5 + 3 = 8
// 8 * 2 = 16
console.log(result2); // 16


// ASSIGNMENT OPERATORS
// "=" assigns a value
let number = 10;
console.log(number); // 10

// "+=" adds and assigns
// number = number + 5
number += 5;
console.log(number); // 15

// "-=" subtracts and assigns
// number = number - 3
number -= 3;
console.log(number); // 12


// COMPARISON OPERATORS

// Variables
let a = 20, b = 30, c = "20", d = 20;

// Mostrar valores
console.log(`\na: ${a}, b: ${b}, c: ${c}, d: ${d}`);


// Weak equality (==) -> Compares only the value
console.log("\nWeak equality (==)");
console.log("20 == 30: " + (a == b)); // false
console.log("20 == '20': " + (a == c)); // true
console.log("20 == 20: " + (a == d)); // true

// Strict equality (===) -> Compares value AND data type
console.log("\nStrict equality (===)");
console.log("20 === 30: " + (a === b)); // false
console.log("20 === '20': " + (a === c)); // false
console.log("20 === 20: " + (a === d)); // true

// Distinct operator (!=)
console.log("\nDistinct operator (!=)");
console.log("20 != 30: " + (a != b)); // false
console.log("20 != '20': " + (a != c)); // true
console.log("20 != 20: " + (a != d)); // true

// Strictly distinct operator (!==)
console.log("\nStrictly distinct operator (!==)");
console.log("20 !== 30: " + (a !== b)); // false
console.log("20 !== '20': " + (a !== c)); // false
console.log("20 !== 20: " + (a !== d)); // true

// RELATIONAL OPERATORS

// Variables
let x = 10;
let y = 20;
let z = "10";

console.log("\nValues:");
console.log(`x = ${x}, y = ${y}, z = ${z}`);

// Greater than (>)
console.log("\nGreater Than (>)");
console.log("a > b: " + (x > y)); // false
console.log("b > a: " + (y > x)); // true

// Less than (<)
console.log("\nLess Than (<)");
console.log("a < b: " + (x < y)); // true
console.log("b < a: " + (y < x)); // false

// Greater than or equal (>=)
console.log("\nGreater Than or Equal (>=)");
console.log("a >= 10: " + (x >= 10)); // true
console.log("b >= 25: " + (y >= 25)); // false

// Less than or equal (<=)
console.log("\nLess Than or Equal (<=)");
console.log("a <= 10: " + (x <= 10)); // true
console.log("b <= 15: " + (y <= 15)); // false

// EXERCISE - 1
number = 10;
console.log("\nEXERCISE - 1")

if (number % 2 === 0){
    console.log("This number es even");
} else {
    console.log("This number es odd");
}

// EXERCISE - 2
age = 18;
console.log("\nEXERCISE - 2");

if (age <= 18){
    console.log("You are of legal age");
} else {
    console.log("You are underage");
}

// AND OPERATOR (&&) - EXAMPLE
number = 5;
const valMax = 10, minVal = 0;

console.log("\nAND OPERATOR (&&) - EXAMPLE")
console.log(`Maximum value: ${valMax}, minimum value: ${minVal} --- Variable: ${number}`)

if ((number >= minVal) && (number <= valMax)) {
    console.log("In the range")
} else {
    console.log("Out of range")
}

// OR OPERATOR (||)
// The OR operator returns true if at least one condition is true.

age = 16;
let hasPermission = true;

// Check if the person is an adult OR has permission
let canEnter = age >= 18 || hasPermission;

// Print values
console.log("Age:", age);
console.log("Has permission:", hasPermission);

// Print result
console.log("Can enter:", canEnter);

// More examples
console.log("\nMore examples:");

// true || false  -> true
console.log(true || false);

// false || true -> true
console.log(false || true);

// false || false -> false
console.log(false || false);

// true || true -> true
console.log(true || true);


// TERNARY OPERATOR -> (?) - EXAMPLE
console.log("\nTERNARY OPERATOR")

numD = 10, numF = 5;

// condition ? value_if_true : value_if_false
let isEven = (numD % 2 === 0) ? true : false;
console.log(`${numD} is even: ${isEven}`);

// condition ? value_if_true : value_if_false
let isOdd = (numD % 2 !== 0) ? true : false;
console.log(`${numF} is even: ${isOdd}`);


// CONVERT FROM STRING TO NUMBER
console.log("\nCONVERT FROM STRING TO NUMBER")

let myAge = "20";
console.log(`Type: ${typeof myAge}`)

// Number -> Convert the string into a number
myAge = Number(myAge);
console.log(`Type: ${typeof myAge}`)

// condition ? value_if_true : value_if_false
let canDrive = (myAge >= 18) ? true : false
console.log(`Can I drive? ${canDrive}`)


// FUNTION isNaN() -> "is Not a Number"
// This function checks if a value is NOT a valid number.

console.log("\nisNaN()");

// Example 1: Valid number
let value1 = 25;

// isNaN(25) returns false because 25 is a valid number
console.log(`value1: ${value1}`);
console.log(`isNaN(value1): ${isNaN(value1)}\n`);


// Example 2: String that contains text
let value2 = "Hello";

// isNaN("Hello") returns true because text is not a number
console.log(`value2: ${value2}`);
console.log(`isNaN(value2): ${isNaN(value2)}\n`);

// Example 3: String with a numeric value
let value3 = "100";

// JavaScript can convert "100" into a number
// That is why isNaN() returns false
console.log(`value3: ${value3}`);
console.log(`isNaN(value3): ${isNaN(value3)}\n`);

// Example 4: Invalid numeric operation
result = 10 * "abc";

// The result becomes NaN (Not a Number)
console.log(`result: ${result}`);
console.log(`isNaN(result): ${isNaN(result)}`);