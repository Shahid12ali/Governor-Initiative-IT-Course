#! /usr/bin/env node

import inquirer from "inquirer";

const inputNumber = Math.floor(Math.random()* 6 + 1);
console.log("wellcome to number guessing game");

const aswer = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess A number between 1-6 ",
}]);

if(aswer.userGuessedNumber === inputNumber){
    console.log("congratulation ! you guessed the right number");
} else{console.log("you guessed the wrong number")};