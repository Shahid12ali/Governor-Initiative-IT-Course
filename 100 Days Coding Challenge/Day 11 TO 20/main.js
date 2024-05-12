//<====================🚀 *Day 11 Challenge: Start Coding!* 🚀====================>
//Question 31- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames2 = ["Shahid", "Dilber", "Adnan", "Admin", "Azam", "Ramzan"];
usernames2 = [];
//console.log(usernames2);
if (usernames2.length > 0) {
    for (let i = 0; i < usernames2.length; i++) {
        if (usernames2[i] == "Admin") {
            console.log(`\n Hello ${usernames2[i]} Would you like to see a status report ?\n`);
        }
        else {
            console.log(`Hello ${usernames2[i]} Thankyou for logging again`);
        }
    }
}
else {
    console.log(`we need to find some users!`);
}
;
//Question 32- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Shahid", "dilber", "Adnan", "Ahmed", "Azam", "Ramzan", "Fayaz"];
let new_users = ["Dilber", "Asad", "Ibad", "ahmed", "Ali"];
new_users.forEach(new_user => {
    let newuserLower = new_user.toLowerCase();
    let userNameTaken = current_users.some(current_user => current_user.toLowerCase() === newuserLower);
    if (userNameTaken) {
        console.log(`${new_user} needs to choose a new user name because it is already takken`);
    }
    else {
        console.log(`${new_user} is the new member added`);
        current_users.push(new_user);
    }
});
console.log(current_users);
//Question 33- Ordinal Numbers: Ordinal numbers indicate their position in a array,
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
// and each result should be on a separate line.
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] == 1) {
        console.log(`${myNumbers[i]}st`);
    }
    else if (myNumbers[i] == 2) {
        console.log(`${myNumbers[i]}nd`);
    }
    else if (myNumbers[i] == 3) {
        console.log(`${myNumbers[i]}rd`);
    }
    else if (myNumbers[i] >= 4 && myNumbers[i] <= 9) {
        console.log(`${myNumbers[i]}th`);
    }
}
;
//<====================🚀 *Day 12 Challenge: Start Coding!* 🚀====================>
//Question 34- Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza
//  you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of
//three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let myPizza = ["cheeze pizza", "pepperoni pizza", "vegeterian pizza"];
for (let i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
for (let i = 0; i < myPizza.length; i++) {
    console.log(`i like to eat ${myPizza[i]}`);
}
;
console.log(`\nI really like to eat pizzas.pizza comes to variety of flavors and toopings,allowing individuals\n to cutomize it to their liking\n`);
//Question 35- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal.
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animalsName = ["Cow", "Sheep", "Goat", "Camel"];
for (let i of animalsName) {
    console.log(i);
}
for (let a of animalsName) {
    console.log(`${a} is a domestic animals\n`);
}
console.log(`\nall these animals ${animalsName[0]},${animalsName[1]},${animalsName[2]} and ${animalsName[3]} meat is halal in islam\n`);
//Question 36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt (size : number, label: string) {
//     return `My Shirt Size Is ${size} And Label Is ${label}`;
// }
// let myfun = make_shirt(35, ", The Sunny Day");
// console.log(myfun);
//Arrow Function
let myfun = (size, label) => {
    return size + label;
};
console.log(myfun(36, " The Cool Day"));
//<====================🚀 *Day 13 Challenge: Start Coding!* 🚀====================>
//Question 37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, label) {
    return size + label;
}
let myFunction = makeShirt("large", " I love Typescript");
console.log(myFunction);
//making large as default
function largeShirt(label, size = "Large ") {
    return size + label;
}
let myfunction = largeShirt("I love Typescript");
console.log(myfunction);
//making medium as default
function mediumShirt(label, size = "Medium ") {
    return size + label;
}
let my_function = mediumShirt("I love Typescript");
console.log(my_function);
//making Shirt of Any Size
function anySizeShirt(label, size) {
    return size + label;
}
let My_function = anySizeShirt(" Any size ", "I love Typescript");
console.log(My_function);
//Question 38- Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
//Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(nameofcity, country = "Pakistan") {
    return `${nameofcity} is in ${country}`;
}
;
// 3 cities
let city1 = describe_city("Karachi");
let city2 = describe_city("Lahore");
let city3 = describe_city("Islamabad");
let city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
//Question 39- City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//           "Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Melbourne", "Australia"));
console.log(city_country("Johannesburg", "South Africa"));
//<====================🚀 *Day 14 Challenge: Start Coding!* 🚀====================>
//Question 40- Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks,
//add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function myAlbum(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = myAlbum("Ali", "Rang-e-Muhabbat");
let album2 = myAlbum("Dilbar", "Roshan Andhera");
let album3 = myAlbum("Adnan", "Masoom-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//optional parameters    //     Number of tracks
function my_Album(artistName, albumTitle, numberofTracks) {
    return { artistName, albumTitle, numberofTracks };
}
let album_1 = my_Album("Ali", "Rang-e-Muhabbat", 35);
let album_2 = my_Album("Dilbar", "Roshan Andhera", 55);
let album_3 = my_Album("Adnan", "Masoom-e-Dil");
console.log(album_1);
console.log(album_2);
console.log(album_3);
//Question 41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
let magicianNames = ["Subhan", "Dilbar", "Adnan", "Ramzan"];
function show_magicians() {
    for (let items of magicianNames) {
        console.log(items);
    }
}
;
show_magicians();
//Question 42- Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the,
//array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician_Names = ["Subhan", "Dilbar", "Adnan", "Ramzan"];
function showMagicians(greet) {
    for (let items of magician_Names) {
        console.log(greet, items);
    }
}
;
showMagicians("Hello, How Are You Mr.");
showMagicians("Hello,"); //2nd Time Calling Function
//<====================🚀 *Day 15 Challenge: Start Coding!* 🚀====================>
//Question 43- Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the,
//original names and one array with the Great added to each magician’s name.
let magician_names = ["Subhan", "Dilbar", "Adnan", "Ramzan"];
let copyOfMagician = [...magician_names];
function showmagicians(greet) {
    let withGreetings = "";
    for (let items of copyOfMagician) {
        withGreetings += `${greet} ${items}\n`;
    }
    ;
    return withGreetings;
}
;
let mygreetings = showmagicians("Hello");
let makearray = mygreetings.split(`\n`);
console.log(makearray);
// Orignal Array
console.log(magician_names);
//Question 44- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides,
//and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//Array as A Parameter
function mySandwiches(...items) {
    return `I Want Sandwich Of ${items}`;
}
;
let collections = mySandwiches("ham ", " lettuce", " cheeze");
let collection2 = mySandwiches("Turkey ", " Swiss");
let collection3 = mySandwiches(); // Without Arrgument
console.log(collections);
console.log(collection2);
console.log(collection3);
//Question 45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
//such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carDetails(manufacturer, modelName, ...additionalInfo) {
    const car = { manufacturer, modelName, ...Object.fromEntries(additionalInfo) };
    return car;
}
;
const myCarDetails = carDetails("Toyota", "Corolla", [`color`, `Silver`], [`Year`, 2022]);
console.log(myCarDetails);
//<====================🚀 *Day 16 Challenge: Start Coding!* 🚀====================>
//*Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.
//*Explain & TIP:*Objects can also contain functions (methods) that can perform actions using the object's properties.
// This introduces method definition within objects.
let myLaptop = {
    make: "Hp",
    model: "Elite Book 8470p",
    year: 2016,
    describe: function () {
        console.log(`This Laptop Is A ${this.make} ${this.model} ${this.year}\n`);
    }
};
myLaptop.describe();
//*Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model,
// and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
//*Explain & TIP:* Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
let laptops = [
    { make: "HP", model: "Elite Book 8470p", year: 2016 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "Dell", model: "XPS 15", year: 2021 },
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
//*Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
//*Explain & TIP:* The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
let price1 = [2200, 3300, 4400];
let price2 = [1100, 1500, 1400];
let combinedPrices = [...price1, ...price2].sort((a, b) => a - b);
console.log(combinedPrices);
//<====================🚀 *Day 17 Challenge: Start Coding!* 🚀====================>
//*Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.
//*Explain & TIP:* Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.
// Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I Enjoy ${hobby}`);
    });
}
;
// Calls the function with three hobbies
logHobbies("Reading", "Coding", "Riding");
//*Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
//*Explain & TIP:* Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
// Using template literals to define a multiline string
let myIdealDay = `My Ideal Day Would Involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
// Logging the multiline string to the console
console.log(myIdealDay);
//*Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//*Explain & TIP:* Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript
//making your code cleaner and more readable.
// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
;
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle
//<====================🚀 *Day 18 Challenge: Start Coding!* 🚀====================>
//*Question 52:* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model,
// and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
//*Explain & TIP:* Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
// Sets up details about a smartphone
let smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128 GB",
        screenSize: "6.2 inches",
        battreyLife: "18 Hours"
    }
};
// Shows what we've set up about the smartphone
console.log(smartphone);
//*Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
//like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//*Explain & TIP:* Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
// A list showing a programmer's skills in detail
let developerskills = {
    languages: ["Typescript", "Javascript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
let { languages, frameworks, tools } = developerskills;
// Showing a skill from each category
console.log(`Language: ${languages[0]},Framwork: ${frameworks[0]}, Tool: ${tools[0]}`);
//*Question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment,
// like adjusting labels based on user choices.
//*Explain & TIP:* This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
// A way to make a flexible list
function craetObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject: [key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = craetObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
//<====================🚀 *Day 19 Challenge: Start Coding!* 🚀====================>
//*Question 55:* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
//*Explain & TIP:* We can use a special tool to go through each number in our list and make a new list with each number doubled.
// Starts with a list of numbers
let numbers = [1, 2, 3, 4, 5, 6];
// Doubles each number
let doubleNumbers = numbers.map(number => number * 2);
// Shows the new list of doubled numbers
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10, 12]
// This line takes each number, doubles it, and puts it in a new list.
//*Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//*Explain & TIP:* We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
// A mixed bag of items
let mixedArray = [1, "Apple", 2, "Banana", true, "carrot"];
// Picks out only the words
let stringsArray = mixedArray.filter(items => typeof items === "string");
// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
//*Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.
//*Explain & TIP:* We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
// A list of grades
let grades = [82, 95, 76, 89, 44, 71];
// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
//<====================🚀 *Day 20 Challenge: Start Coding!* 🚀====================>
//*Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.
//*Explain & TIP:* This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
// This program calculates the average of all scores given
function averageScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
//*Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
//*Explain & TIP:* Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!
// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
//*Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
//*Explain & TIP:* This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
// This profile sets itself up and can share info about the user
let userProfile = (function () {
    // The user's details are kept inside
    let name = "Shahid";
    let age = 24;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
export {};
// We made a self-setup profile that can talk about the user.
