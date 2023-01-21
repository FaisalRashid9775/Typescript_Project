import inquirer from "inquirer";
import chalk from "chalk";
const electricityBill = Math.floor(Math.random() * 1000 + 1);
const phoneBill = Math.floor(Math.random() * 1000 + 1);
const gasBill = Math.floor(Math.random() * 1000 + 1);
async function UtilityBill(balance) {
    const answer = await inquirer.prompt([{
            name: 'billsType',
            type: 'list',
            choices: ['Electricity', 'Phone', 'Gas'],
            message: 'Select your Bill'
        }]);
    switch (answer.billsType) {
        case 'Electricity':
            console.log(chalk.red(electricityBill));
            balance = balance - electricityBill;
            break;
        case 'Phone':
            console.log(chalk.red(phoneBill));
            balance = balance - phoneBill;
            break;
        case 'Gas':
            console.log(chalk.red(gasBill));
            balance = balance - gasBill;
            break;
    }
    return balance;
}
export default UtilityBill;
