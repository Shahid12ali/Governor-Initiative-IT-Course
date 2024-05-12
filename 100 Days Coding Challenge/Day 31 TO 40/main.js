//<====================🚀 *Day 31 Challenge: Start Coding!* 🚀====================>
//*Question 91:* Create an array of your three favorite fruits and add a new fruit to the end of the array.
//*Explain & TIP:* Adding elements to an array can be easily done using the .push() method. 
// It allows you to add new items to the end of an array.
// Defines an array with three favorite fruits
let favoriteFruits = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango"); // Adds "Mango" to the end of the array
console.log(favoriteFruits); // Outputs: ['Apple', 'Banana', 'Cherry', 'Mango']
// This line adds a new fruit to our list of favorites.
//*Question 92:* Write a function to remove the last element from an array and return the removed element.
//*Explain & TIP:* The .pop() method removes the last element from an array and returns that element.
// This can be useful when you need to work with the removed item.
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
const fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
//*Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".
//*Explain & TIP:* To replace an item in an array, find its index using .indexOf(), then use that
// index to set a new value with array bracket notation.
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruit) {
    const index = fruit.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1)
        fruit[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fruit = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruit);
console.log(fruit); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
//<====================🚀 *Day 32 Challenge: Start Coding!* 🚀====================>
//*Question 94:* Use the .map() method to create a new array that contains the length of each word from an array of words.
//*Explain & TIP:* The .map() method transforms each item in an array according to a 
// specific function and returns a new array with the transformed items.
// Defines an array with some words
const words = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
const length = words.map(word => word.length);
console.log(length); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.
//*Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.
//*Explain & TIP:* The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
// Example: Filtering an array of numbers
const numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); // Outputs: [15, 20, 25]
// The new array contains only the numbers that are greater than 10.
//*Question 96:* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
//*Explain & TIP:* The .reduce() method applies a function against an accumulator and each 
// element in the array (from left to right) to reduce it to a single value.
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
// Example: Calculating the sum of an array of numbers
const Numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(Numbers)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
//<====================🚀 *Day 33 Challenge: Start Coding!* 🚀====================>
//*Question 97:* Write a function that returns the current date in the format "DD-MM-YYYY".
//*Explain & TIP:* Working with dates in JavaScript often requires formatting them in a specific way. 
// The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, `0`); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, `0`); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
//*Question 98:* Create a JavaScript snippet that calculates and logs how many days are left until New Year.
//*Explain & TIP:* To find the difference between two dates, you can subtract one Date object from another,
// which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
//*Question 99:* Generate a date object representing your next birthday and log it to the console.
//*Explain & TIP:* When creating a Date object for a future event like a birthday, you might 
// need to adjust the year based on whether the birthday has already occurred this year or not.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(12, 25); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
//<====================🚀 *Day 34 Challenge: Start Coding!* 🚀====================>
//*Question 100:* Use the JavaScript Math object to find the square root of 144.
//*Explain & TIP:* The Math.sqrt() function is a straightforward way to calculate the square 
//root of any positive number, directly providing the result you need.
// Finds the square root of 144 using Math.sqrt()
const squareRoot = Math.sqrt(144);
console.log(squareRoot); // Outputs: 12
// This line effectively calculates and shows the square root of 144.
//*Question 101:* Generate a random integer between 1 and 10.
//*Explain & TIP:* To generate a random integer within a specific range, you can use 
// Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.
// Generates a random integer between 1 and 10
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInt()); // Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.
//*Question 102:* Calculate and log the absolute difference between the number -5 and 5.
//*Explain & TIP:* The Math.abs() function returns the absolute value of a number, which is 
// useful for finding the magnitude of a difference without regard to direction.
// Calculates the absolute difference between -5 and 5
const difference = Math.abs(-5 - 5);
console.log(difference); // Outputs: 10
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.
//<====================🚀 *Day 35 Challenge: Start Coding!* 🚀====================>
//*Question 103:* Write a function that returns a random boolean value, true or false.
//*Explain & TIP:* Generating a random boolean is a simple but useful trick. You can use 
// Math.random() and check if it's above or below 0.5 to decide between true or false.
// This function returns a random boolean value
function getRandomBoolean() {
    return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
}
console.log(getRandomBoolean()); // Outputs either true or false randomly
// By comparing a random number to 0.5, we effectively get a true or false value randomly.
//*Question 104:* Create a function that generates a random hexadecimal color code.
//*Explain & TIP:* Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. 
// You can generate each digit randomly and concatenate them into a full color code.
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    const color = `#` + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, `0`);
    return color; //// Returns the random color code
}
console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
//*Question 105:* Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
//*Explain & TIP:* Simulating a dice roll involves randomly choosing an integer between 1 and 6. 
// Use Math.random() along with some arithmetic to achieve this range.
// This function simulates rolling a dice and returns a number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
}
console.log(rollDice()); // Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.
//<====================🚀 *Day 36 Challenge: Start Coding!* 🚀====================>
//*Question 106:* Determine if a given year is a leap year using comparison operators.
//*Explain & TIP:* A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. 
// This rule helps align our calendar years with the Earth's orbital period.
// This function checks if a year is a leap year
function isLeapYear(year) {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // Outputs: true
console.log(isLeapYear(1900)); // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
//*Question 107:* Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
//*Explain & TIP:* Checking for divisibility involves using the modulo operator (%) to see if there's any remainder.
// A number divisible by both 2 and 3 without a remainder is also divisible by 6.
// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number) {
    // Uses the modulo operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
console.log(isDivisibleByTwoAndThree(14)); // Outputs: false
// Logical operators help us verify the number's divisibility by both 2 and 3.
//*Question 108:* Compare two strings to check if they are identical, ignoring case sensitivity.
//*Explain & TIP:* To compare strings without considering their case (uppercase/lowercase), 
// you can convert both strings to the same case before comparing.
// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
//<====================🚀 *Day 37 Challenge: Start Coding!* 🚀====================>
//*Question 109:* Write an if statement that logs "Good Morning" if the current time is before 12 PM.
//*Explain & TIP:* You can get the current hour using the Date object and its getHours() 
//method. Remember, hours are in 24-hour format, so 12 PM is 12.
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day.
//*Question 110:* Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
//*Explain & TIP:* A common grading system assigns letter grades based on score ranges. 
//You can use an if-else-if chain to determine the grade.
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85)); // Outputs: B
console.log(assignGrade(55)); // Outputs: F
//*Question 111:* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
//*Explain & TIP:* Age groups can typically be categorized by specific ranges. For instance, 
// you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
// This function categorizes a person's age group
function categorizeAge(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(12)); // Outputs: child
console.log(categorizeAge(18)); // Outputs: teenager
console.log(categorizeAge(25)); // Outputs: adult
// Based on the age provided, we log the corresponding age group.
//<====================🚀 *Day 38 Challenge: Start Coding!* 🚀====================>
//*Question 112:* Create a Map that stores the names of countries as keys and their capitals 
// as values. Add three countries to the Map.
//*Explain & TIP:* The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. 
//It can be more efficient for large sets of data and when the key is not a string.
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington,D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
//*Question 113:* Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
//*Explain & TIP:* You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the map");
    }
}
;
// Assuming countries Map from Question 112
logCapitalOfCanada(countries);
// Checks if Canada is in our Map and logs the capital if it exists.
//*Question 114:* Iterate over a Map of student IDs and names, and log each pair to the console.
//*Explain & TIP:* Iterating over a Map can be done using the .forEach() method or a for...of 
// loop, providing access to each key-value pair.
// Creates a Map to store student IDs (keys) and names (values)
const students = new Map();
students.set(1, "Shahid");
students.set(2, "Subhan");
students.set(3, "Dilbar");
// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
//<=========================🚀 *Day 39 Challenge: Start Coding!* 🚀=========================>
//*Question 115:* Use a switch statement to log the days of the week based on a number (1-7).
//*Explain & TIP:* A switch statement is a great way to select one of many code blocks to be 
// executed. It's particularly useful for scenarios like mapping numbers to days of the week.
// This function logs the day of the week based on a number (1-7)
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Number");
            break;
    }
}
logDayOfWeek(6); // Outputs: Friday
// Uses a switch statement to select the appropriate day based on the provided number.
//*Question 116:* Create a switch case that matches several cases to the same code block, representing seasons.
//*Explain & TIP:* You can group multiple case statements together when they should 
// execute the same block of code, which is handy for categorizing items into broader groups.
// This function logs the season based on the month
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("Invalid Month");
            break;
    }
}
logSeason(12); // Outputs: Winter
// Multiple cases share the same code block to represent each season.
//*Question 117:* Implement a switch statement that evaluates an expression and uses the,default case if none of the cases match.
//*Explain & TIP:* The default case in a switch statement provides a way to execute a block,
// of code when none of the other case labels match the expression's value.
// This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
}
evaluateGrade("B"); // Outputs: Good
// Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.
//<=========================🚀 *Day 40 Challenge: Start Coding!* 🚀=========================>
//*Question 118:* Write a loop that logs numbers from 1 to 10 to the console.
//*Explain & TIP:* A for loop is a concise way to run a block of code a specific number of 
// times. It's perfect for when you know exactly how many iterations you need.
// This loop logs numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // Logs the current value of i
}
// Each iteration increases the value of i by 1, logging it until it reaches 10.
//*Question 119:* Create a while loop that logs "Hello, World!" 5 times.
//*Explain & TIP:* A while loop continues to run as long as its condition remains true. It’s 
// ideal for when you want to repeat something until a certain condition changes.
// Initializes a counter
let count = 0;
// This while loop runs until count is 5
while (count < 5) {
    console.log("Hello, World!"); // Logs "Hello, World!"
    count++; // Increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
//*Question 120:* Use a for...of loop to iterate through an array of your favorite movies and log each one.
//*Explain & TIP:* The for...of loop is a modern loop introduced in ES6, designed to iterate 
// over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
// Defines an array of favorite movies
const favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
// Uses a for...of loop to iterate through favoriteMovies
for (const movie of favoriteMovies) {
    console.log(movie); // Logs each movie name
}
export {};
// Each movie in the array is logged to the console, one at a time.
