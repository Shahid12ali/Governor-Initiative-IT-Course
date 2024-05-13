//<=========================🚀 *Day 41 Challenge: Start Coding!* 🚀=========================>
//*Question 121:* Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
//*Explain & TIP:* The continue statement can be used to skip over an iteration in a loop. It's,
//particularly handy when you want to ignore specific cases without stopping the entire loop.
// This for loop counts from 1 to 10 but skips 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips the rest of the loop for i = 5
    }
    console.log(i); // Logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.
//*Question 122:* Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
//*Explain & TIP:* The break statement terminates the loop immediately. This is useful for ,
// stopping a loop when a certain condition is met, even if the loop's original termination ,
// condition hasn't been reached yet.
// Initializes the counter at 10
let counter = 10;
// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
    if (counter === 5) {
        break; // Exits the loop when counter reaches 5
    }
    console.log(counter);
    counter--; // Decrements the counter
}
// Logs the countdown from 10 but stops abruptly when it hits 5.
//*Question 123:* Create a loop that iterates through a string and stops when it finds the first vowel.
//*Explain & TIP:* To find a specific character in a string, you can iterate through each ,
// character and use a condition to check for vowels. The loop can stop once a vowel is found.
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.
//<=========================🚀 *Day 42 Challenge: Start Coding!* 🚀=========================>
//*Question 124:* Create a function inside an object that returns the object's own name property using the this keyword.
//*Explain & TIP:* The this keyword in an object's method refers to the object itself, making it 
// straightforward to access its properties from within its methods.
// Defines an object with a name property and a method to return its name
const person = {
    name: "Shahid",
    getName: function () {
        return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName()); // Outputs: Shahid
// This method correctly identifies and returns the object's 'name' property using 'this'.
//*Question 125:* Modify a method in an object to use the this keyword to access another property in the same object.
//*Explain & TIP:* You can leverage the this keyword to interact with multiple properties,
//within the same object, providing a cohesive way to manipulate internal data.
// An object with multiple properties and a method that interacts with them using 'this',
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea()); // Outputs: 20
// The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.
//*Question 126:* Explain how the this keyword changes its value when used inside a nested function within a method.
//*Explain & TIP:* When this is used inside a nested function within an object's method, it 
//does not refer to the object itself but to the global object (in a browser, window). This 
//behavior often requires workarounds like assigning this to another variable in the outer function.
// Demonstrates 'this' behavior change in a nested function
const myObject = {
    property: "Value",
    outerMethod: function () {
        console.log(this.property); // Works as expected, logs "Value"
        const innerMethod = () => {
            console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
//<=========================🚀 *Day 43 Challenge: Start Coding!* 🚀=========================>
//*Question 127:* Convert a traditional function expression to an arrow function.
//*Explain & TIP:* Arrow functions provide a concise syntax for writing function expressions. 
// They don't have their own bindings to this or super, and should not be used as methods.
// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3)); // Outputs: 8
console.log(arrowFunction(5, 3)); // Outputs: 8
// Demonstrates the conversion of a traditional function expression to an arrow function.
//*Question 128:* Create an arrow function that takes multiple parameters and returns the product of all parameters.
//*Explain & TIP:* Arrow functions can take zero, one, or multiple parameters. When dealing 
// with multiple parameters, you enclose them in parentheses.
// Arrow function that calculates the product of all its parameters
const multiplyParameters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.
//*Question 129:* Explain how this behaves differently in arrow functions compared to traditional functions.
//*Explain & TIP:* In traditional functions, this refers to the object that called the function, 
// which can vary depending on the context. In arrow functions, this is lexically bound, 
// meaning it uses this from the code that contains the arrow function.
// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        // console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.
//<=========================🚀 *Day 44 Challenge: Start Coding!* 🚀=========================>
//*Question 130:* Explain how to export a function from one JavaScript file and import it into another file.
//*Explain & TIP:* In modern JavaScript development, modules ,allow you to divide your code into separate files.
// and maintainable. You can export functions, objects, or primitives from one file and import them into another.
// In another file where you want to use the add function:
// import { add } from "./mathFunction.js";
console.log(add(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.
//*Question 131:* Create two modules; one that exports a class, and another that imports the class and creates an instance.
//*Explain & TIP:* Classes can be modularized in the same way as functions. This 
// encapsulation and reusability is a cornerstone of modern JavaScript application structure.
// In another file:
import { Person } from "./person.js";
const alice = new Person("Shahid");
alice.greet(); // Outputs: Hello, my name is Shahid
// This code illustrates the syntax and usage differences between default and named exports.
//<=========================🚀 *Day 45 Challenge: Start Coding!* 🚀=========================>
//*Question 133:* Write a JavaScript object and convert it into a JSON string.
//*Explain & TIP:* JSON (JavaScript Object Notation) is a lightweight data-interchange 
//format. It's easy for humans to read and write and for machines to parse and generate. 
//Converting a JavaScript object into a JSON string can be done using JSON.stringify().
// Defines a JavaScript object
const perSon = {
    name: "Shahid",
    age: 24,
    city: "Kashmor",
};
// Converts the object into a JSON string
const jsonString = JSON.stringify(perSon);
console.log(jsonString); // Outputs: {"name":"Shahid","age":24,"city":"Kashmor"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.
//*Question 134:* Take a JSON string and parse it into a JavaScript object.
//*Explain & TIP:* JSON.parse() is used to convert a JSON string into a JavaScript object. This
// is particularly useful when dealing with data received as JSON from a web server or API.
// Defines a JSON string
const jSonString = `{"Name" : "Shahid", "Age" : 24, "City" : "Kashmor"}`;
// Parses the JSON string back into a JavaScript object
const PeRsOn = JSON.parse(jSonString);
console.log(PeRsOn); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.
//*Question 135:* Explain how you can format a JSON string with proper indentation for readability.
//*Explain & TIP:* JSON.stringify() can take additional parameters to format the resulting 
//JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
// Reusing the person object from Question 133
const PeRSOn = {
    name: "Shahid",
    age: 24,
    city: "Kashmore",
};
// Converts the object into a JSON string with indentation
const jSONSTRing = JSON.stringify(PeRSOn, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jSONSTRing);
/* Outputs:
{
  "name": "Shahid",
  "age": 24,
  "city": "Kashmor"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
//<=========================🚀 *Day 46 Challenge: Start Coding!* 🚀=========================>
//*Question 136:* Use console.log() to debug and track the value of a variable inside a loop.
//*Explain & TIP:* console.log() is an invaluable tool for developers to monitor the values of variables, 
// the flow of execution, and to understand the state of their program at various points in time,
// especially within loops where values change with each iteration.
// Demonstrates using console.log() inside a loop to track variable values
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}, i value:, i`); // Logs the current iteration number and the value of i
}
// This loop iterates five times, logging the value of 'i' during each iteration to help with debugging.
//*Question 137:* Implement a try-catch block to handle potential errors in a block of code.
//*Explain & TIP:* The try-catch statement marks a block of statements to try, and specifies a response,
// should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
// Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    // console.log(error.message);  // Logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
//*Question 138:* Describe how to use breakpoints in browser developer tools to debug JavaScript code.
//*Explain & TIP:* Breakpoints are a powerful feature in browser developer tools that allow 
//you to pause the execution of your JavaScript code at a specific line. This gives you an opportunity to inspect variables
//step through code one line at a time, and understand how your code executes in real-time.
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, 
// and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
//<=========================🚀 *Day 47 Challenge: Start Coding!* 🚀=========================>
//*Question 139:* List three reserved words in JavaScript and create a valid use case for each.
//*Explain & TIP:* Reserved words in JavaScript are words that have a special meaning and 
//cannot be used as identifiers (e.g., variable names, function names). Understanding these 
//can help prevent syntax errors and make your code more readable.
// Reserved word: let - used to declare a block-scoped local variable
let count = 5;
// Reserved word: if - used to execute a block of code if a specified condition is true
if (count > 0) {
    console.log("Count is greater than 0.");
}
// Reserved word: return - used to exit a function and return a value from that function
function add(a, b) {
    return a + b;
}
// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.
//*Question 140:* Explain the error that occurs when trying to use a reserved word as a variable name.
//*Explain & TIP:* Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript.
// This is because reserved words have predefined meanings and uses in the language syntax.
// Attempting to use a reserved word as a variable name
// let if = 5; // This line would cause a syntax error
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
// It's important to avoid using reserved words as identifiers to prevent these errors.
//*Question 141:* Discuss the significance of the await reserved word in asynchronous JavaScript.
//*Explain & TIP:* The await operator is used to wait for a Promise to settle. It can only be used inside an async function.
//Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.
// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchData();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
// This demonstrates how 'await' improves readability and flow in asynchronous code.
//<=========================🚀 *Day 48 Challenge: Start Coding!* 🚀=========================>
//*Question 142:* Create a Promise that resolves with "Hello, World!" after 2 seconds.
//*Explain & TIP:* Promises in JavaScript are used for asynchronous computations and can be in one of these states: 
// pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle 
//operations that take some time to complete, like fetching data or timing events.
// Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello,World!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console.
//*Question 143:* Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
//*Explain & TIP:* The .then() method is called when a Promise is successfully resolved, while .catch() 
//is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then((result) => console.log(result)) // Handles a successful resolution
    .catch((error) => console.log(error.message)); // Handles a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
//*Question 144:* Explain the use of the Promise.all() method with an example.
//*Explain & TIP:* Promise.all() takes an iterable of Promises and returns a single Promise 
//that resolves when all of the Promises in the iterable have resolved or when the iterable 
//contains no Promises. It is rejected if any of the passed Promises are rejected. This method
//is useful for aggregating the results of multiple promises.
// Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Outputs: [3, 42, "foo"]
});
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.
//<=========================🚀 *Day 49 Challenge: Start Coding!* 🚀=========================>
//*Question 145:* Create a function that accepts a callback and invokes it with some arguments.
//*Explain & TIP:* Callbacks are functions passed as arguments to another function. This design pattern is very
// common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const addd = (a, b) => {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(addd, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.
//*Question 146:* Show an example of a callback function used to filter an array of numbers.
//*Explain & TIP:* The .filter() method creates a new array with all elements that pass the test implemented by the provided function. 
// This method is commonly used to search through an array and create a subset of it based on certain criteria.
// This array of numbers will be filtered
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
//*Question 147:* Explain how to handle errors in a callback pattern.
//*Explain & TIP:* Handling errors in a callback pattern often involves passing an error as the first argument to the callback.
// This convention allows the callback function to check for errors before proceeding with its execution.
// Function that uses a callback pattern, including error handling
function FetchData(callback) {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully
    }
    else {
        callback(error); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
FetchData((error, data) => {
    if (error) {
        console.log(error.message); // Handles the error
    }
    else {
        console.log(data); // Processes the data
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
//<=========================🚀 *Day 50 Challenge: Start Coding!* 🚀=========================>
//*Question 148:* Demonstrate the use of the setTimeout() function to execute code after a delay.
//*Explain & TIP:* setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. 
//It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.
// Uses setTimeout to log a message after a 2-second delay
setTimeout(() => {
    console.log("This message is shown after a 2-second delay.");
}, 2000);
// This showcases how to use setTimeout to delay actions in your code.
//*Question 149:* Explain the concept of the event loop in JavaScript with an example.
//*Explain & TIP:* The event loop is a fundamental concept in JavaScript, enabling asynchronous operations.
// It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.
console.log("Start");
setTimeout(() => {
    console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
//*Question 150:* Describe how asynchronous callbacks differ from synchronous code execution.
//*Explain & TIP:* Asynchronous callbacks allow JavaScript to perform long network requests, file operations,
// or set timers without blocking the main thread, enabling the continuation of code execution.
// Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
