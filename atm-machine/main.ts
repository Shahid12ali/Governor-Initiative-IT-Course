#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 35000;
let pinCode = 12345;

console.log(chalk.blue("Well Come To HBL ATM"));

let pinAnswer = await inquirer.prompt(
    [
      {

         name: "pin",
         message: "Please Enter Your Pin Code",
         type: "number",

     }
    ]
);

if(pinAnswer.pin === pinCode) {
    console.log(chalk.greenBright `Your Current Balance Is RS ${myBalance}`);

    let operationAns = await inquirer.prompt(
        [
            {

                name: "operation",
                message: "Please Select One Option",
                type: "list",
                choices: ["Withdraw", "Fast Cash", "Check Balance", "Exit",]
            }
        ]
);
    if (operationAns.operation === "Withdraw") {
       let amountAns = await inquirer.prompt(
        [
            {
                name : "amount",
                message: "Enter Amount",
                type : "number",
            }
        ]
       );
         if(amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
       console.log(`You Have Succesfully withdraw RS ${amountAns.amount} Your Remainin Balance Is RS ${myBalance}`);
         } else {
            console.log(chalk.red`Insufficient Balance`);
         }

    } else if(operationAns.operation === "Fast Cash") {
        let fastBalance = await inquirer.prompt(
            [
                {
                    name : "fast_withdraw",
                    message : "Please Select Amount",
                    type : "list",
                    choices : ["2000","4000","6000","8000","10000",]
                }
            ]
        );
         myBalance -= fastBalance.fast_withdraw;
         console.log(`You Have Succesfully Withdraw RS ${fastBalance.fast_withdraw} Your Remaining Balance Is RS ${myBalance} \n Thank You For Using ATM`);
    } 
     else if (operationAns.operation === "Check Balance") {
        console.log(chalk.yellowBright`Your Current Balance Is RS ${myBalance}`);
    } else if (operationAns.operation === "Exit" ) {
        console.log(chalk.bold.magentaBright `Good Bye`)
    }
    
} 
else{
    console.log(chalk.red`Incorrect Pin Code`);
}



  
