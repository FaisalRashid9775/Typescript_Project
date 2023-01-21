import inquirer from "inquirer";

async function transfer(balance : number){
    const beneficiory = await inquirer.prompt([{
        name : 'accountNumber',
        type : 'number',
        message : 'Enter your beneficiory account number'
    },{
        name : 'amount',
        type : 'number',
        message : 'Enter amount'
    }])

    balance=balance-beneficiory.amount
    return balance

}
export default transfer