// Question 1- Install Node.js, TypeScript and VS Code on your computer.And Print The ("Hello World")\ Installatione Done
console.log("Hello World");
// Question 2- Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
let personName = "Eric";
console.log(`Hello ${personName} would you like to learn some Python today?`);
// Question 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
let person_Name = "Shahid Ali";
// in lowercase
console.log("To Lower Case", person_Name.toLocaleLowerCase());
//in upper case
console.log("To Upar Case", person_Name.toUpperCase());
//in title case
console.log("To Title Case", person_Name.replace(/\bw/g, c => c.toUpperCase()));
// Question 4- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of
// its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "“A person who never made a mistake never tried anything new.”";
let author = "Albert Einstein";
console.log(`${author} Once Said ${quote}`);
// Question 5- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
// called famous_person. Then compose your message and store it in a new variable called message. 
// Print your message.
let Quote = "“A person who never made a mistake never tried anything new.”";
let famous_person = "Albert Einstein";
let message = `${famous_person} Once Said ${Quote}`;
console.log(message);
// Question 6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
let person_name = "\n\t Shahid Ali \t\n";
console.log(person_name);
var stripped = personName.trim();
console.log(stripped);
// Question 7 & 8- Number Eight: Write addition, subtraction, multiplication, and division operations that each
// result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(`Addition`, 5 + 3);
console.log(`Subtraction`, 11 - 3);
console.log(`Multipilaction`, 4 * 2);
console.log(`Division`, 16 / 2);
// Question 9- Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.
let favoriteNumber = 10;
console.log(`My Favorite Number Is ${favoriteNumber}`);
// Question 10- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
// Shahid Ali, 2024-04-25
// This program prints a personal message.
let myName = "Shahid Ali";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);
// Question 11- Names: Store the names of a few of your friends in a array called names. Print each person’s name by
// accessing each element in the list, one at a time.
let names = ["Shahid", "Subhan", "Adnan", "Dilbar"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//let name : string[] = ["Shahid", "Subhan", "Adnan", "Dilbar"];
for (let name of names) {
    console.log(`Hello ${name}, Do You Like To Play Football?`);
}
// Question 13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let transportation = ["Honda Civic", "Audi", "Lexus", "Grandey"];
transportation.map((items) => console.log(`I Would Like To Own A ${items}`));
// Question 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.
let guest = ["Subhan", "Adnan", "Dilbar"];
guest.map((items) => (console.log(`Dear ${items} , You Are Invited To The Dinner`)));
// Question 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a,
// new set of invitations. You’ll have to think of someone else to invite.
let Guest = ["Shahid", "Subhan", "Adnan", "Dilbar"];
let canNotAttend = "Shahid";
let newGuest = "Tehzeeb";
Guest[Guest.indexOf(canNotAttend)] = newGuest;
Guest.map((items) => console.log(`Dear ${items} , You Are Invited To The Dinner`));
/* Question 16- More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
Add one new guest to the beginning of your array.
Add one new guest to the middle of your array.Use append() to add one new guest to the end of your list.
Print a new set of invitation messages, one for each person in your list.*/
let myFriends = ["Shahid", "Subhan", "Adnan", "Dilbar"];
//Adding 3 More Friends
console.log(myFriends);
//Add At Begning
myFriends.unshift("Ahmed");
// console.log(myFriends);
//Add At Middle
myFriends.splice(2, 0, "Ali");
// console.log(myFriends);
//Add At Last
myFriends.push("Hammad");
// console.log(myFriends);
//Print All Friends Along With Message
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Dear ${myFriends[i]} You Are Invited To My Dinner`);
}
/* Question 17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
   and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let myfriends = ["Shahid", "Subhan", "Adnan", "Dilbar", "Hamzah", "Akash"];
console.log(`Table Is Not Available I Can Invite Only 2 Persons`);
//Remove All 4 Last elements
let friend1 = myfriends.pop();
console.log(`sorry dear ${friend1} you are not invited!`);
let friend2 = myfriends.pop();
console.log(`sorry dear ${friend2} you are not invited!`);
let friend3 = myfriends.pop();
console.log(`sorry dear ${friend3} you are not invited!`);
let friend4 = myfriends.pop();
console.log(`sorry dear ${friend4} you are not invited!\n`);
for (let i = 0; i < myfriends.length; i++) {
    console.log(`Dear ${myfriends[i]} you are still invited`);
}
myfriends.pop();
myfriends.pop();
console.log(myfriends);
/* Question 18- Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let myPlaces = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar", "Multan"];
console.log(myPlaces);
// making a copy of an array
let copyOfArray = myPlaces.slice();
let sortedArray = copyOfArray.sort();
console.log(sortedArray);
//printing orignal array
console.log(myPlaces);
//reversing orignal array
//first we have make a copy of orignal array
let copyofarr2 = myPlaces.slice();
let reverseOriarr = copyofarr2.reverse();
// console.log(reverseOriarr);
//printing the orignal array
// console.log(myPlaces);
// reverse the order of orignal array
let reverseOriarr2 = myPlaces.reverse();
// console.log(reverseOriarr2);
let againRevers = reverseOriarr2.reverse();
// console.log(againRevers); // same as orignal array
//sortin orignal array
let sortoriArr = myPlaces.sort();
console.log(sortoriArr);
let reversesortedArr = sortoriArr.reverse();
console.log(reversesortedArr);
// Question 19- Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner. 
let Myfriends = ["Shahid", "Subhan", "Adnan", "Dilbar", "Hamzah"];
console.log(`iam inviting ${Myfriends.length} friends to my dinner which are following\n`);
for (let i = 0; i < Myfriends.length; i++) {
    console.log(`${i + 1}.${Myfriends[i]}`);
}
// Question 20- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.
let proglang = ["Typescript", "C++", "Javascript", "Python", "Ruby"];
//making list of these items
proglang.forEach((items) => {
    console.log(items);
});
// Question 21- They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.
// Object is consist of key + value
let stdntdetail = {
    name: "Shahid Ali",
    age: 24,
    gender: "Male",
    rollNumber: 370195,
};
console.log(stdntdetail);
// Question 22- Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program. 
let myArray = [24, "Shahid", 20, "Car", 20];
console.log(myArray[0]);
console.log(myArray[3]);
console.log(myArray[4]);
// Question 23- Conditional Tests: Write a series of conditional tests. Print a statement describing each test
// and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.");
//console.log(car == 'subaru');
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//// Single (=) use for assigning and (==) used for camparission,
//10 statements true and false
// Statement 1,
let myCar = "Civic";
console.log(myCar == "Civic"); // true And false
console.log(myCar == "civic");
// Statement 2,
let myFruites = "Apple";
console.log(myFruites == "Apple"); // true And false
console.log(myFruites == "apple");
// Statement 3,
let myarray = [22, 33, 44];
console.log(myarray.length == 3); // true And false
console.log(myarray.length == 2);
// Statement 4,
let stdName = "Shahid";
console.log(stdName == "Shahid"); // true And false
console.log(stdName == "shahid");
// Statement 5,
let mySchool = "Government";
console.log(mySchool == "Government"); // true And false
console.log(mySchool == "government");
/* Question 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
    Have at least one True and one False result for each of the following:*/
//• Tests for equality and inequality with strings
//• Tests using the lower case function
let my_name = "Shahid";
console.log(my_name == "Shahid"); //true             equal to
console.log(my_name !== "shahid"); //true             not equal to
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,and less than or equal to
let myNumber = 20;
console.log(myNumber == 20); //true
console.log(myNumber !== 20); //true
console.log(myNumber > 5); //true    greater than
console.log(myNumber < 5); //false   less  than
console.log(myNumber <= 5); //false   less than or equal to
console.log(myNumber >= 5); //true    greater than orequal to
//• Tests using "and" and "or" operators
let num1 = 10;
let num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
//         true state   false state        
console.log(num1 > 9 || num2 < 5); //true
//         true state   false state        
//• Test whether an item is in a array
//• Test whether an item is not in a array
let my_Array = [2, 3, "Shahid"];
let myString = "Ali";
console.log(Array.isArray(my_Array)); //true
console.log(Array.isArray(myString)); //false
//Question 25- Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//• Write an if statement to test whether the alien’s color is green. If it is, 
//print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color == "green") {
    console.log(`player just earned 5 points.`);
}
else {
}
//Question 26- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "green";
if (alienColor == "green") {
    console.log(`player just earned 5 points.`);
}
else {
    console.log(`player just earned 10 points.`);
}
if (alienColor == "white") {
    console.log(`player just earned 5 points.`);
}
else {
    console.log(`player just earned 10 points.`);
}
;
//Question 27- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//let alien_Color = "green";
//let alien_Color = "red";
//let alien_Color = "no color";
let alien_Color = "yellow";
if (alien_Color == "green") {
    console.log(`player just earned 5 points.`);
}
else if (alien_Color == "yellow") {
    console.log(`the player earned 10 points`);
}
else if (alien_Color == "red") {
    console.log(`the player earned 15 points`);
}
else {
    console.log(`the player earned 0 points`);
}
;
//Question 28- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let personAge = 20;
if (personAge < 2) {
    console.log(`The person is a baby.`);
}
else if (personAge >= 2 && personAge < 4) {
    console.log(`The person is a toddler.`);
}
else if (personAge >= 4 && personAge < 13) {
    console.log(`The person is a kid.`);
}
else if (personAge >= 13 && personAge < 20) {
    console.log(`The person is a teenager.`);
}
else if (personAge >= 20 && personAge < 65) {
    console.log(`The person is an adult.`);
}
else if (personAge >= 65) {
    console.log(`The person is an elder.`);
}
;
//Question 29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Apple", "Orange", "Banana"];
if (favorite_fruits.includes("Mango")) {
    console.log(`I would like to eat mango`);
}
else if (favorite_fruits.includes("Apple")) {
    console.log(`I would like to eat Apple`);
}
else {
    console.log(`fruite are not available!`);
}
;
//Question 30- Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting 
//to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Shahid", "Dilber", "Adnan", "Admin", "Azam", "Ramzan"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log(`\n Hello ${usernames[i]} Would you like to see a status report ?\n`);
    }
    else {
        console.log(`Hello ${usernames[i]} Thankyou for logging again`);
    }
}
;
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
    return `I Want Sanwich Of ${items}`;
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
export {};
