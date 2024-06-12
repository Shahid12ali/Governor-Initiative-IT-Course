#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name : string
    constructor (name : string) {
    this.name = name;
    }
};

class Person {
    student : Student [] = [];
    addStudent (obj : any) {
    this.student.push(obj);
    }
};

const persons = new Person();
const programeStart = async(persons : Person) => {
    do {
        console.log(chalk.bold.italic.yellow("------------------------------------------------------------"));
        console.log(chalk.bold.italic.yellow("----------WellCome To Shahid Baloch OOP Project-------------"));
        console.log(chalk.bold.italic.yellow("------------------------------------------------------------"));

        const answer = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type : "list",
                    message : "Who would you like to talk to?",
                    choices : ["Self", "Student", "Exit"],
                },
            ]
        );
        if (answer.opt === "Self") {
            console.log(chalk.green.italic("Hi, I'm talking to myself"));
            console.log(chalk.green.italic("I am in good health"));
        }
        if (answer.opt === "Student") {
            const answer2 = await inquirer.prompt(
                [
                    {
                        name : "student",
                        type : "input",
                        message : "Which student do you want to talk to?"
                    },
                ]
            );
            const student = persons.student.find(val => val.name === answer2.student);
            if (!student) {
                const addStudent = new Student(answer2.student);
                persons.addStudent(addStudent);
                console.log(`Hellow I,am ${addStudent.name}`);
                console.log("How are you");
                console.log(persons.student);
            }
            if (student) {
                console.log(`Hellow i am ${student.name}, or me thk hoon..............`);
                console.log(chalk.bold.yellow.italic("---Student Data---"));
                console.log(persons.student);
            };
        }
        if (answer.opt === "Exit") {
            console.log(chalk.red.italic("Thank You..."));
            process.exit();
        }
    } while(true);

};
programeStart(persons);