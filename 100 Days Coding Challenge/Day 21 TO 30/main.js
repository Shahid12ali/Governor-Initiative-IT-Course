//<====================🚀 *Day 21 Challenge: Start Coding!* 🚀====================>
//*Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
//*Explain & TIP:* Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
;
// Showing one type of vehicle from the list
console.log(VehicleType); // It shows 0 because enums start counting from 0
// Filling in the blueprint with an example student
let student = {
    name: "Shahid",
    age: 22,
    courses: ["Typescript", "Python", "javascript"]
};
// Showing the student's information
console.log(student);
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5,
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20,
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
//<====================🚀 *Day 22 Challenge: Start Coding!* 🚀====================>
//*Question 64:* Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
// For example, if provided with "Age: " and 30, it should give back "Age: 30".
//*Explain & TIP:* In JavaScript, the + operator can add numbers together or join strings. 
// Mixing a string with a number changes the number into a string for the joining.
// This function mixes a text and a number into one text
function combineStringAndNumber(text, number) {
    // Joins the text and number into a single text
    return text + number;
}
// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
// Here, we put together the text and number.
//*Question 65:* Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign.
// For example, remainder(5, 2) should give 1.
//*Explain & TIP:* The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.
// This function finds the leftover of dividing two numbers
function remainder(num1, num2) {
    // Gives back the leftover of num1 divided by num2
    return num1 % num2;
}
// Trying it with 5 divided by 2
console.log(remainder(5, 2)); // Shows 1
// This tells us the leftover, which is 1 here.
//*Question 66:* Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, 
// using the && operator. For instance, checkBothTrue(true, false) should be false.
//*Explain & TIP:* The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
// This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false
// It checks two things, but since one is false, the answer is false.
//<====================🚀 *Day 23 Challenge: Start Coding!* 🚀====================>
//*Question 67:* Arithmetic with Mixed Types: Write a function that takes two parameters:
// a number and a string that represents a number (e.g., "5"). Return their sum as a number.
//*Explain & TIP:* JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number,
// JavaScript converts the string to a number for the operation.
// This function adds a number and a string that represents a number
function addNumberAndString(number1, numberString) {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}
// Trying it with 10 and "5"
console.log(addNumberAndString(10, "5")); // Shows 15
// The string "5" is turned into the number 5, and then added to 10.
//*Question 68:* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
// Round the result to two decimal places.
//*Explain & TIP:* When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
// This function multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.
//*Question 69:* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both,
// the quotient and the remainder. Use an object to return both values.
//*Explain & TIP:* Division can give you a whole part (quotient) and a leftover part (remainder).
//Returning both in an object is a neat way to keep them together.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
//<====================🚀 *Day 24 Challenge: Start Coding!* 🚀====================>
//*Question 70:* Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
// Explain how the let keyword affects the visibility of the loop variable.
//*Explain & TIP:* The let keyword provides block scope in JavaScript, which means variables declared,
//with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.
// This function prints numbers from 1 to 5 using a loop
function printNumberWithLet() {
    for (let i = 1; i <= 5; i++) {
        // Uses `let` for loop variable `i`
        console.log(i); // Logs numbers 1 through 5
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let`
}
printNumberWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
//*Question 71:* Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.
//*Explain & TIP:* let allows you to declare variables that can be reassigned, while const is for variables that should not change once set.
// Using const helps make your code safer and more predictable.
// Using `let` for a variable that can be reassigned
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
const name = "Shahid";
try {
    //name = "Subhan";  // This line will cause an error
}
catch (error) {
    console.log("Error : Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
//*Question 72:* Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const.
// Show how variables declared inside the block are not accessible outside of it.
//*Explain & TIP:* Block scope, created by {} in JavaScript, confines let and const variables to that block,
// enhancing code organization and preventing accidental access from outside the block.
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
// try {
//     console.log(blockLet);  // This will fail
// } catch (error) {
//     console.log("`blockLet` is not accessible outside the block.");
// }
// try {
//     console.log(blockConst);   // This will also fail
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
//<====================🚀 *Day 25 Challenge: Start Coding!* 🚀====================>
//*Question 73:* Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value.
// Then, update its value within the same function and log both the initial and updated values.
//*Explain & TIP:* In JavaScript, you can assign a value to a variable with = and later update it as needed.
// This is fundamental for keeping track of changing data within your programs.
// This function shows how to assign and update variable values
function updateVariable() {
    let number = 10; // Initially assigns the value 10
    console.log("Initial Value:", number); // Logs the initial value
    number = 20; // Updates the value to 20
    console.log("Updated Value:", number); // Logs the updated value
}
updateVariable();
// We assign a value to a variable and then update it, showing how values can change.
//*Question 74:* Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10,
// then swap their values so that a becomes 10 and b becomes 5.
//*Explain & TIP:* Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around.
// It's like juggling where you temporarily place one ball in a basket to free up your hand.
// This function swaps the values of two variables
function swapValues() {
    let a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before Swape: a =", a, "b =", b);
    let temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp
    console.log("After Swape: a =", a, "b =", b); // Logs the swapped values
}
swapValues();
// We use a temporary variable to hold one value while we swap them, like a magic trick!
//*Question 75:* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
// Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
//*Explain & TIP:* Compound assignment operators combine an arithmetic operation with assignment, 
// making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);
    x += 2; // Adds 2 to x
    console.log("After addition:", x); // Shows x after addition
    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x); // Shows x after subtraction
    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication
    x /= 2; // Divides x by 2
    console.log("After division:", x); // Shows x after division
}
useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
//<====================🚀 *Day 26 Challenge: Start Coding!* 🚀====================>
//*Question 76:* Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together,
//and returns the result. Show how you can call this function and log the result.
//*Explain & TIP:* Functions can take inputs (parameters) and give back an output (return value). 
//They're like personal assistants that do a specific task for you and report back with the results.
// This function adds two numbers and returns the result
function addNumbers(num1, num2) {
    // Calculates the sum of num1 and num2
    return num1 + num2;
}
// Calling the function with two numbers and logging the result
console.log(addNumbers(10, 12)); // Outputs 
// Here, we ask our function to add 10 and 12, and it tells us the answer is 22.
//*Question 77:* Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. 
// If no name is given, it should greet an anonymous user.
//*Explain & TIP:* Default parameters allow your functions to have preset values for their parameters.
//These values are used if no other value is provided, making functions more flexible.
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name = "Mr.Shahid Baloch") {
    // Says hello to the given name or to an anonymous user
    console.log(`Hello ${name}!`);
}
// Trying the function with a name and without
greetUser(`Subhan`); // Outputs: Hello, Subhan!
greetUser(); // Outputs: Hello. Mr Shahid Baloch!
// We see how our function can say hello to someone by name, or just say hello if we don't know the name.
//*Question 78:* Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating,
// one of each that performs the same task, such as squaring a number.
//*Explain & TIP:* JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, 
//and expressions that are stored in variables and are called using the variable name.
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
console.log(squareDeclaration(4)); // Outputs: 16
console.log(squareExpression(4)); // Outputs: 16
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
//<====================🚀 *Day 27 Challenge: Start Coding!* 🚀====================>
//*Question 79:* Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, 
// and year. Then, show how you can access the model property of the car.
//*Explain & TIP:* Objects are collections of properties, kind of like a box for storing related information. You can create an object to group
//related data and access its properties using either dot notation or bracket notation.
// This sets up an object for a car with specific details
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(car.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.
//*Question 80:* Updating Object Properties: Add a property named color to the existing car object, 
// and then update the year property to 2021. Show how to perform these operations.
//*Explain & TIP:* You can add new properties to an object or change existing ones after the object is created.
//This flexibility allows objects to be dynamically updated as needed.
//Starting with our car object
let cars = {
    make: "Honda",
    model: "City",
    year: 2020,
    color: "", // Define color property with an initial value
};
// Adding a new property 'color' and updating 'year
cars.color = "white"; // Adds a new property 'color'
cars.year = 2022; // Updates the 'year' property
// Showing the updated car object
console.log(cars); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
//*Question 81:* Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
//*Explain & TIP:* You can loop through each property of an object using a for...in loop. This is useful for 
// when you need to examine or display all the information an object holds.
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        if (obj.hasOwnProperty(property)) {
            console.log(`${property}: ${obj[property]}`);
            // Shows the property name and its value
        }
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2024, color: "silver" });
// It tells us each piece of information stored about the car.
//<====================🚀 *Day 28 Challenge: Start Coding!* 🚀====================>
//*Question 82:* Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
//*Explain & TIP:* The .length property of a string gives you the total number of characters it contains,
// helping you understand more about the data you're working with.
// This function counts how many characters are in a string
function stringLength(str) {
    return str.length; // Returns the number of characters in the string
}
// Example: Measuring the length of a name
console.log(stringLength("Shahid")); // Outputs: 6
// We're simply asking how long the string "Shahid" is, and it tells us there are 5 characters.
//*Question 83:* Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
//*Explain & TIP:* The .toUpperCase() and .toLowerCase() methods allow you to change the 
// case of all letters in a string, useful for formatting or comparing strings.
// This function changes a string to uppercase and then to lowercase
function convertCase(str) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
// Example: Changing the case of "Hello World"
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// We're showing the same text in all uppercase and then all lowercase.
//*Question 84:* Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
//*Explain & TIP:* The .replace() method can search for a specific text pattern in a string and replace it with something else.
// By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}
// Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".
//<====================🚀 *Day 29 Challenge: Start Coding!* 🚀====================>
//*Question 85:* Finding the Position of a Substring: Write a function that locates the first 
// occurrence of the word "code" within any given string and returns its position.
//*Explain & TIP:* Use .indexOf() to find where a certain piece of text starts within a larger 
//string. If the text isn't found, this method returns -1.
// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with javaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.
//*Question 86:* Checking for Text Presence: Create a function that checks if the word 
//"JavaScript" is present in a given string. It should return true if found, otherwise false.
//*Explain & TIP:* The .includes() method lets you check if a string contains a certain piece of 
//text, returning a boolean (true or false).
// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str) {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}
// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in JavaScript!")); // Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.
//*Question 87:* Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
//*Explain & TIP:* .substring() can be used to get a specific part of a string, by specifying the start and end positions.
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 10); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript world!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.
//<====================🚀 *Day 30 Challenge: Start Coding!* 🚀====================>
//*Question 88:* Rounding to the Nearest Integer: Write a function that takes a decimal 
// number as input and returns the number rounded to the nearest integer.
//*Explain & TIP:* The Math.round() function is perfect for rounding decimals to the closest 
// whole number. It looks at the decimal part and decides whether to round up or down.
// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num) {
    return Math.round(num); // Rounds the number
}
// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.
//*Question 89:* Converting Strings to Numbers: Create a function that takes a string 
//representing a number (like "123") and converts it into an actual number type.
//*Explain & TIP:* parseInt() for whole numbers or parseFloat() for decimals are handy for 
//turning number-like strings into real numbers, allowing you to perform mathematical operations on them.
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("98")); // Outputs: 98
// We're taking strings that look like numbers and turning them into actual numbers.
//*Question 90:* Checking if a Value is NaN: Demonstrate how to check if a variable's value 
//is NaN (Not a Number) and return a boolean result.
//*Explain & TIP:* isNaN() helps you figure out if something that's supposed to be a number 
//didn't turn out to be a number. It's useful for validating inputs or results of calculations.
// This function checks if a value is Not a Number (NaN)
function isValueNaN(value) {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNaN("hello")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(123)); // Outputs: false, because 123 is a number
export {};
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
