#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function startQuiz() {
    let quizz = [
        {
            name: "quiz1",
            message: "What Does JSON Stand For?",
            type: "list",
            choices: ["(A)JavaScript Object Notation","(B)JavaScript Object Naming","(C)JavaScript Ordered Notation","(D)JavaScript Object Network"],
            correctAns: "(A)JavaScript Object Notation",
        },
        {
            name: "quiz2",
            message: "Which Method Is Used To Convert A Javascript Object To A JSON String?",
            type: "list",
            choices: ["(A)stringify()","(B)parse()","(C)serialize()","(D)decode()"],
            correctAns: "(A)stringify()",
        },
        {
            name: "quiz3",
            message: "In JSON,How Are Key-Value Pairs Separated?",
            type: "list",
            choices: ["(A)With Commas ,", "(B)With Colons :", "(C)With Semicolons ;", "(D)With Hyphens -"],
            correctAns: "(B)With Colons :",
        },
        {
            name: "quiz4",
            message: "Which Of The Following data types can be represented in JSON?",
            type: "list",
            choices: ["(A)String","(B)Number","(C)Arrays","(D)All Of The Above"],
            correctAns: "(D)All Of The Above",
        },
        {
            name: "quiz5",
            message: "In JSON,Which Symbol Is Used To Represent An Object?",
            type: "list",
            choices: ["(A)Square brackets[]","(B)Curly braces{}","(C)Parentheses()","(D)Angel brackets<>"],
            correctAns: "(B)Curly braces{}",
        },
        {
            name: "quiz6",
            message: "Which Method Is Used To Convert A JSON String To A Javascript object?",
            type: "list",
            choices: ["(A)stringify()","(B)parse()","(C)serialize()","(D)decode()"],
            correctAns: "(B)parse()",
        },
        {
            name: "quiz7",
            message: "Can JSON Represent Complex Data Structures Like Trees And Graphs?",
            type: "list",
            choices: ["(A)Yes","(B)No"],
            correctAns: "(A)Yes",
        },
        {
            name: "quiz8",
            message: "One Of The Differences Between Syntax Of JSON And Normal Javascript Object Is That,In JSON,Keys Are Always String.?",
            type: "list",
            choices: ["(A)true", "(B)false"],
            correctAns: "(A)true",
        },
        {
            name: "quiz9",
            message: "What is the result of Boolean(0) in JavaScript?",
            type: "list",
            choices: ["(A)true","(B)false"],
            correctAns: "(B)false",
        },
        {
            name: "quiz10",
            message: "In javascript what will be out put of.\n  console.log( true + 1)",
            type: "list",
            choices: ["(A) 1", "(B) 2","(C) 0","(D)error"],
            correctAns: "(B) 2",
        }
    ];

    let point = 0;
    console.log(chalk.yellow.bold("Welcome To The Quiz!"));
    
    for (let question of quizz) {
        let answers = await inquirer.prompt([
            {
                name: "answer",
                message: chalk.cyanBright(question.message),
                type: "list",
                choices: question.choices,
            }
        ]);

        if (answers.answer === question.correctAns) {
            console.log(chalk.green("Correct!"));
            point++;
        } else {
            console.log(chalk.red("Incorrect!"));
        }
    }

    console.log(chalk.yellow.bold(`The End Your Score Is ${point}/${quizz.length}`));
}

startQuiz();
