//<====================🚀 *Day 1 Challenge: Start Coding!* 🚀====================>

//Question 1:* Install Node.js, TypeScript and VS Code on your computer/Laptop.
//Explain & TIP: Simply install the following things via any browser of your choice.& print the ("Hello World")

console.log("Hello World");

//Question 2: Personal Message: Store a person’s name in a variable and print a message to them,
//like “Hello Asharib, would you like to learn some TypeScript today?”

let personName : string = "Shahid";
let message : string = "“would you like to learn some TypeScript today?”";
console.log(`Hello ${personName} ${message}`);

//*Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
//*Explain & TIP:* Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, and First Letter Big for each word.
// This helps learn how to change text style.

let person_name : string = "Shahid Ali";
console.log("To lower Case",person_name.toLowerCase());    // Shows the name in all small letters

console.log("To Upper Case",person_name.toUpperCase());    // Shows the name in ALL BIG LETTERS
console.log("To Title Case", person_name.replace(/\bw/g,c=>c.toUpperCase()));// Shows the name with the First Letter Big


//<====================🚀 *Day 2 Challenge: Start Coding!* 🚀====================>
//*Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author
//Your output should look something like the following, including the quotation marks:
//"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');


//*Question 5:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable 
//called famous_person. Then compose your message and store it in a new variable called message.
// Print your message.
let famous_person : string = "Albert Einstein";
let Message : string = `${famous_person} once said,“A person who never made a mistake never tried anything new.”`;
console.log(Message);

//*Question 6:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after stripping the white spaces.
let name: string = "\t\n Shahid Ali \t\n";
console.log(name);
console.log(name.trim());

//<====================🚀 *Day 3 Challenge: Start Coding!* 🚀====================>
// *Question 7 & 8: * Number Eight: Write addition, subtraction, multiplication, and division operations that each
// result in the number 8. Enclose your operations in print statements.
console.log(5+3,"Addition");            //Addition
console.log(10-2,"Subtraction");       //Subtraction
console.log(4*2,"Multipilaction");    //Multipilaction
console.log(16/2,"Division");        //Division


//*Question 9:* Favorite Number: Store your favorite number in a variable. Then, create a message revealing 
//your favorite number. Print that message.
let favorite : number = 10;
console.log(`My Favorite Number is ${favorite}`);

//<====================🚀 *Day 4 Challenge: Start Coding!* 🚀====================>
// Question 10- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
// Shahid Ali, 2024-04-25
// This program prints a personal message.
let myName: string = "Shahid Ali";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

// Question 11- Names: Store the names of a few of your friends in a array called names. Print each person’s name by
// accessing each element in the list, one at a time.
let names: string[] = ["Shahid", "Subhan", "Adnan", "Dilbar"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Question 12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//let name : string[] = ["Shahid", "Subhan", "Adnan", "Dilbar"];
for (let name of names) {
    console.log(`Hello ${name}, Do You Like To Play Football?`);
};

//<====================🚀 *Day 5 Challenge: Start Coding!* 🚀====================>
// Question 13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let transportation : string [] = ["Honda Civic", "Audi","Lexus", "Grandey"];
transportation.map((items) => console.log(`I Would Like To Own A ${items}`));

// Question 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.
let guest: string[] = ["Subhan", "Adnan", "Dilbar"];
guest.map((items) => (console.log(`Dear ${items} , You Are Invited To The Dinner`)));

// Question 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a,
// new set of invitations. You’ll have to think of someone else to invite.
let Guest: string[] = ["Shahid","Subhan", "Adnan", "Dilbar"];
let canNotAttend : string = "Shahid";
let newGuest : string = "Tehzeeb";
Guest [Guest.indexOf(canNotAttend)] = newGuest;
Guest.map((items) => console.log(`Dear ${items} , You Are Invited To The Dinner`));

//<====================🚀 *Day 6 Challenge: Start Coding!* 🚀====================>
/* Question 16- More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
Add one new guest to the beginning of your array.
Add one new guest to the middle of your array.Use append() to add one new guest to the end of your list.
Print a new set of invitation messages, one for each person in your list.*/
let myFriends: string[] = ["Shahid", "Subhan", "Adnan", "Dilbar"];
//Adding 3 More Friends
console.log(myFriends);
//Add At Begning
myFriends.unshift("Ahmed");
// console.log(myFriends);
//Add At Middle
myFriends.splice(2, 0,"Ali");
// console.log(myFriends);
//Add At Last
myFriends.push("Hammad");
// console.log(myFriends);
//Print All Friends Along With Message
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Dear ${myFriends[i]} You Are Invited To My Dinner`)
}

/* Question 17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
   and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let myfriends: string[] = ["Shahid", "Subhan", "Adnan", "Dilbar","Hamzah","Akash"];
console.log(`Table Is Not Available I Can Invite Only 2 Persons`)
//Remove All 4 Last elements
let friend1 = myfriends.pop();
console.log(`sorry dear ${friend1} you are not invited!`);

let friend2 = myfriends.pop();
console.log(`sorry dear ${friend2} you are not invited!`);

let friend3 = myfriends.pop();
console.log(`sorry dear ${friend3} you are not invited!`);

let friend4 = myfriends.pop();
console.log(`sorry dear ${friend4} you are not invited!\n`);

for(let i = 0; i < myfriends.length; i++) {
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

let myPlaces : string[] = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar", "Multan"];
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

//<====================🚀 *Day 7 Challenge: Start Coding!* 🚀====================>
// Question 19- Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner. 
let Myfriends: string[] = ["Shahid", "Subhan", "Adnan", "Dilbar","Hamzah"];
console.log(`iam inviting ${Myfriends.length} friends to my dinner which are following\n`)
for (let i = 0; i < Myfriends.length; i++) {
    console.log(`${i + 1}.${Myfriends[i]}`)
}

// Question 20- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.
let proglang : string [] = ["Typescript","C++","Javascript","Python","Ruby"];
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

//<====================🚀 *Day 8 Challenge: Start Coding!* 🚀====================>
// Question 22- Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program. 
let myArray : (string | number) [] = [24,"Shahid",20,"Car",20];
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
let myCar : string = "Civic";
console.log(myCar == "Civic");             // true And false
console.log(myCar == "civic");
// Statement 2,
let myFruites : string = "Apple";
console.log(myFruites == "Apple");         // true And false
console.log(myFruites == "apple");
// Statement 3,
let myarray = [22,33,44];
console.log(myarray.length == 3);          // true And false
console.log(myarray.length == 2);
// Statement 4,
 let stdName = "Shahid";
 console.log(stdName == "Shahid");        // true And false
 console.log(stdName == "shahid");
// Statement 5,
 let mySchool = "Government";
 console.log(mySchool == "Government");    // true And false
 console.log(mySchool == "government");

/* Question 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
    Have at least one True and one False result for each of the following:*/
 
    //• Tests for equality and inequality with strings
    //• Tests using the lower case function
    let my_name = "Shahid";
    console.log(my_name == "Shahid");                    //true             equal to
    console.log(my_name !== "shahid");                   //true             not equal to
   // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,and less than or equal to
   let myNumber = 20;
   console.log(myNumber == 20);                        //true
   console.log(myNumber !== 20);                       //true
   console.log(myNumber > 5);                          //true    greater than
   console.log(myNumber < 5);                          //false   less  than
   console.log(myNumber <= 5);                         //false   less than or equal to
   console.log(myNumber >= 5);                         //true    greater than orequal to
   //• Tests using "and" and "or" operators
   let num1 = 10;
   let num2 = 5;
   console.log(num1 > 9 && num2 < 5);                 //false
   //         true state   false state        
   console.log(num1 > 9  ||  num2 < 5);                 //true
   //         true state   false state        
   //• Test whether an item is in a array
   //• Test whether an item is not in a array
   let my_Array = [2,3,"Shahid"];
   let myString = "Ali";
   console.log(Array.isArray(my_Array));             //true
   console.log(Array.isArray(myString));             //false

//<====================🚀 *Day 9 Challenge: Start Coding!* 🚀====================>
   //Question 25- Alien Colors #1: Imagine an alien was just shot down in a game. 
   //Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
   //• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
     //• Write an if statement to test whether the alien’s color is green. If it is, 
     //print a message that the player just earned 5 points.
     let alien_color = "green";
     if(alien_color == "green") {
        console.log(`player just earned 5 points.`);
     }else{
        
     }

//Question 26- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "green";
if(alienColor == "green") {
    console.log(`player just earned 5 points.`);
}else{
    console.log(`player just earned 10 points.`);
}
if(alienColor == "white") {
    console.log(`player just earned 5 points.`);
}else{
    console.log(`player just earned 10 points.`);
};

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
}else if(alien_Color == "yellow") {
    console.log(`the player earned 10 points`);
}else if (alien_Color == "red") {
    console.log(`the player earned 15 points`);
}else{
    console.log(`the player earned 0 points`);
};

//<====================🚀 *Day 10 Challenge: Start Coding!* 🚀====================>
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
} else if(personAge >= 2 && personAge < 4) {
    console.log(`The person is a toddler.`);
}else if (personAge >= 4 && personAge < 13) {
    console.log(`The person is a kid.`);
}else if (personAge >= 13 && personAge < 20) {
    console.log(`The person is a teenager.`);
}else if (personAge >= 20 && personAge < 65) {
    console.log(`The person is an adult.`);
}else if (personAge >= 65 ) {
    console.log(`The person is an elder.`);
};

//Question 29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Apple","Orange","Banana"];
if (favorite_fruits.includes ("Mango")) {
    console.log(`I would like to eat mango`);
}else if (favorite_fruits.includes("Apple")) {
    console.log(`I would like to eat Apple`);
}else{
    console.log(`fruite are not available!`);
};

//Question 30- Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting 
//to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames : string[] = ["Shahid","Dilber","Adnan","Admin","Azam","Ramzan"];
for(let i = 0; i < usernames.length; i++) {
    if(usernames[i] == "Admin") {
        console.log(`\n Hello ${usernames[i]} Would you like to see a status report ?\n`);
    }else{
        console.log(`Hello ${usernames[i]} Thankyou for logging again`);
    }
};