import inquirer from "inquirer";
import mainScreen from "./mainscreen.js";
import users from "./users.js";
async function logins() {
    const answer = await inquirer.prompt([{
            name: 'accountNumber',
            type: 'number',
            message: 'Enter your account Number',
        }, {
            name: 'pin',
            type: 'password',
            message: 'Enter your PIN'
        }]);
    let user = users.find(x => x.accountNumber == answer.accountNumber && x.PIN == answer.pin);
    if (typeof user != 'undefined') {
        console.log(`Welcome ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log('Enter valid details');
    }
}
export default logins;
