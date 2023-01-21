import inquirer from "inquirer";
async function cashdeposit(balance) {
    const cash = await inquirer.prompt([{
            name: 'deposit',
            type: 'number',
            message: 'Enter your deposit amount'
        }]);
    balance = balance + cash.deposit;
    return balance;
}
export default cashdeposit;
