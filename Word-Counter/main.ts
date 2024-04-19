#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer : {sentence : string; } = await inquirer.prompt(
    [
        {
            name : "sentence",
            message : "Enter Your Sentence To Count The Word",
            type : "input"
        }
    ]
);
const words = answer.sentence.toUpperCase().trim().split(" ");
console.log(chalk.blueBright(words));

console.log(chalk.magenta`Your Sentence Word Counte Is ${words.length}`);