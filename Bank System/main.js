#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { faker, } from "@faker-js/faker";
// Customer Class
class customer {
    firstName;
    lastName;
    age;
    gender;
    mobNumber;
    accountNumber;
    constructor(fName, lName, age, gender, mNumber, accNumber) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mNumber;
        this.accountNumber = accNumber;
    }
}
//  Bank Class 
class bank {
    customer = [];
    account = [];
    addcustomer(obj) {
        this.customer.push(obj);
    }
    addAccount(obj) {
        this.account.push(obj);
    }
    transaction(obj) {
        let newAccount = this.account.filter(acc => acc.accNumber !== obj.accNumber);
        this.account = [...newAccount, obj];
    }
}
//  Customer Create 
let meezanBank = new bank();
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName("male");
    let number = parseInt(faker.string.numeric(`##########`));
    const cus = new customer(fName, lName, 18 * i, "male", number, 1000 + i);
    meezanBank.addcustomer(cus);
    meezanBank.addAccount({ accNumber: cus.accountNumber, balance: 1000 * i });
    // Creat Random Customer Account Number
    console.log(`Created Customer With Account Number: ${cus.accountNumber}`);
}
console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
console.log(chalk.italic.bold.magenta("<---------------  WELCOME To Meezan BANK --------------->"));
console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
//   Bank Functionality 
async function bankService(bank) {
    do {
        let service = await inquirer.prompt([
            {
                name: "Select",
                type: "list",
                message: "Please Select The Service",
                choices: ["Check Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
            }
        ]);
        //    Check  Balance 
        if (service.Select === "Check Balance") {
            console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
            let res = await inquirer.prompt([
                {
                    name: "input",
                    type: "input",
                    message: "Please Enter Your Account Number",
                }
            ]);
            let account = meezanBank.account.find((acc) => acc.accNumber == res.input);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number!"));
            }
            if (account) {
                let name = meezanBank.customer.find((item) => item.accountNumber == account?.accNumber);
                console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} Your Current Balance is ${chalk.bold.blue.italic(`$${account.balance}`)} `);
                console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
            }
        }
        // Cash Withdraw 
        if (service.Select === "Cash Withdraw") {
            console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
            let res = await inquirer.prompt([
                {
                    name: "input",
                    type: "input",
                    message: "Please Enter Your Account Number",
                }
            ]);
            let account = meezanBank.account.find((acc) => acc.accNumber == res.input);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number!"));
            }
            if (account) {
                let ans = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Please Enter Your Amount",
                    }
                ]);
                if (ans.amount <= account.balance) {
                    let newBalance = account.balance - ans.amount;
                    // transaction method 
                    meezanBank.transaction({ accNumber: account.accNumber, balance: newBalance });
                    console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
                    console.log(chalk.bold.italic.magenta(`Withdraw ${chalk.green(ans.amount)} from account ${chalk.gray(account.accNumber)}. New balance: ${chalk.bold.green(newBalance)}`));
                    console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
                }
                else {
                    console.log(chalk.red.bold.italic("Insufficiant Balance!"));
                }
            }
            ;
        }
        //    Cash Deposit 
        if (service.Select === "Cash Deposit") {
            console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
            let res = await inquirer.prompt([
                {
                    name: "input",
                    type: "input",
                    message: "Please Enter Your Account Number",
                }
            ]);
            let account = meezanBank.account.find((acc) => acc.accNumber == res.input);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number!"));
            }
            if (account) {
                let ans = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Please Enter Your Amount"
                    }
                ]);
                let newBalance = account.balance + ans.amount;
                meezanBank.transaction({ accNumber: account.accNumber, balance: newBalance });
                console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
                console.log(chalk.bold.italic.magenta(` Debited ${chalk.green(ans.amount)} from account ${chalk.gray(account.accNumber)}. New balance: ${chalk.bold.green(newBalance)}`));
                console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
            }
        }
        //   Exit
        if (service.Select === "Exit") {
            console.log(chalk.italic.bold.magenta("<------------------------------------------------------->"));
            console.log(chalk.bold.red.italic("Thank You"));
            process.exit();
        }
    } while (true);
}
;
//Calling The Main Function
bankService(meezanBank);
