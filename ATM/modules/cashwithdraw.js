import inquirer from "inquirer";
import chalk from "chalk";
async function otherBalance(balance) {
    const otherwithdraw = await inquirer.prompt([{
            name: 'otherAmount',
            type: 'number',
            message: 'Enter your amount'
        }]);
    if (balance > otherwithdraw.otherAmount) {
        balance = balance - otherwithdraw.otherAmount;
        console.log(`Your new balance is ${balance}`);
    }
    else {
        console.log(chalk.red('You have insufficient balance'));
    }
}
async function cashwithdraw(balance) {
    const withdraw = await inquirer.prompt([{
            name: 'amount',
            type: 'list',
            choices: ['500', '1000', '2000', '5000', '10000', '20000', 'other amount'],
            message: 'Select your withdraw amount'
        }]);
    switch (withdraw.amount) {
        case '500':
            if (balance > withdraw.amount) {
                balance = balance - 500;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('You have insufficient Balance');
            }
            break;
        case '1000':
            if (balance > withdraw.amount) {
                balance = balance - 1000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('You have insufficient Balance');
            }
            break;
        case '2000':
            if (balance > withdraw.amount) {
                balance = balance - 2000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('You have insufficient Balance');
            }
            break;
        case '5000':
            if (balance > withdraw.amount) {
                balance = balance - 5000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('You have insufficient Balance');
            }
            break;
        case '10000':
            if (balance > withdraw.amount) {
                balance = balance - 10000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('You have insufficient Balance');
            }
            break;
        case '20000':
            if (balance > withdraw.amount) {
                balance = balance - 20000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('You have insufficient Balance');
            }
            break;
        case 'other amount':
            await otherBalance(balance);
            break;
    }
    return balance;
}
export default cashwithdraw;
