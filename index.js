#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\t\n\t\n Currency Converter App\n\t\n\t"));
const currencies = {
    USD: 1, // base currency
    PKR: 280,
    JOD: 0.71,
    AZN: 1.70,
    HKD: 7.83,
    EUR: 0.92,
    NZD: 1.66,
    AUD: 1.52,
    KWD: 0.31,
    INR: 83.30,
};
let user_convert = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Select from currency...",
        type: "list",
        choices: ["USD", "PKR", "JOD", "AZN", "HKD", "EUR", "NZD", "AUD", "KWD", "INR"],
    },
    {
        name: "to_currency",
        message: "Select to currency...",
        type: "list",
        choices: ["USD", "PKR", "JOD", "AZN", "HKD", "EUR", "NZD", "AUD", "KWD", "INR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currencies[user_convert.from_currency];
let toAmount = currencies[user_convert.to_currency];
let amount = user_convert.amount;
let base_currency = amount / fromAmount;
let converted_currency = base_currency * toAmount;
console.log(chalk.magentaBright(converted_currency));
