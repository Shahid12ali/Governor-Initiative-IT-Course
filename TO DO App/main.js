#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let todoList = [];
console.log(chalk.blue `<====================Welcome To The TO DO List App====================>`);
while (true) {
    const answer = await inquirer.prompt([
        {
            name: "Querry",
            message: "What Do You Want To Do In TO DO List",
            type: "list",
            choices: ["View List", "Add Items", "Delete Items", "Quit"]
        }
    ]);
    if (answer.Querry === "View List") {
        console.log(chalk.magentaBright `<==================== Here Is The List ====================>`);
        for (let item of todoList) {
            console.log(todoList.indexOf(item) + 1 + ":" + item);
        }
        if (todoList.length === 0) {
            console.log(chalk.red `\n<================No Entreis=============>\n`);
        }
        console.log(chalk.red `\n<=======================================>\n`);
    }
    else if (answer.Querry === "Add Items") {
        let input = prompt(chalk.greenBright `Enter Your TO DO Item: `);
        todoList.push(input);
        console.log(chalk.greenBright `${input} Added In The List: `);
    }
    else if (answer.Querry === "Delete Items") {
        for (let item of todoList) {
            console.log(todoList.indexOf(item) + 1 + `: ` + item);
        }
        let deleteTodo = Number(prompt(`Enter Your TO DO Item Number That You Want To Delete: `));
        console.log(chalk.red `${todoList[deleteTodo - 1]} , Is Now Removed From The List :`);
        todoList.splice(deleteTodo - 1, 1);
    }
    else {
        console.log(chalk.magenta `<==================== Thanks For Using The App ====================>`);
        break;
    }
}
