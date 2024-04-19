#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta`Welcome To Currency-Converter`);

const currency : any = {
    USD : 1,              //US-Dollar          //Base Value
    PKR : 279.53,         //Pakistani Rupee
    INR : 83.23,          //Indian Rupee
    EUR : 296.56,         //Euro
    GBP : 346.468313,     //British-Pound
    CAD	: 202.503580,     //Canadian Dollar
    AUD : 178.695829,     //Australian Dollar
    SGD : 204.464762,     //Singapore Dollar
    CHF : 306.789322,     //Swiss Franc
    MYR : 58.238157,      //Malaysian Ringgit
    JPY : 1.803555,       //Japanese Yen 
    UAE : 3.5,            // U.A.E Dirham
    TRY : 8.54,           //Turkish Liras
};
let answer = await inquirer.prompt (
    [
        {
            name : "from",
            message : "Enter From Currency",
            type : "list",
            choices : ["USD", "PKR", "INR", "EUR", "GBP", "CAD", "AUD", "SGD", "CHF", "MYR", "JPY", "UAE", "TRY"]
        },
        {
            name : "to",
            message : "Enter To Currency",
            type : "list",
            choices : ["USD", "PKR", "INR", "EUR", "GBP", "CAD", "AUD", "SGD", "CHF", "MYR", "JPY", "UAE", "TRY"]
        },
        {
            name : "amount",
            message : "Enter Your Amount",
            type : "number",
        },
    ]
);
let fromAnswer = currency[answer.from];
let toAnswer = currency [answer.to];
let amountAnswer = answer.amount;
let baseAmount = amountAnswer / fromAnswer;
let convertAmount = baseAmount * toAnswer;
console.log(chalk.blueBright`Converted Amount = ${chalk.magentaBright(convertAmount.toFixed(2))}`);
