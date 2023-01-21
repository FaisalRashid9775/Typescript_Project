#! usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 3000));
async function welcome() {
    const title = chalkAnimation.karaoke("Welcome ! Let's start gamne");
    await sleep();
    title.stop();
}
var playerLife = 3;
async function askQuestion() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log('playerLife left : ', playerLife);
    do {
        console.log('playerLife : ', playerLife);
        playerLife--;
        var question = await inquirer.prompt([{
                name: 'user_num',
                type: 'number',
                message: 'Please select a number between 0 and 10'
            }]);
        console.log(question);
        if (question.user_num === randomNumber) {
            console.log(chalk.green('You guess a correct number'));
        }
        else if (question.user_num < randomNumber) {
            console.log(chalk.red(`You guess a number is less than ${randomNumber}`));
        }
        else if (question.user_num > randomNumber) {
            console.log(chalk.red(`You guess a number is greater than ${randomNumber}`));
        }
    } while (playerLife > 0 && question.user_num !== randomNumber);
    if (playerLife == 0) {
        console.log(chalk.yellow('GAME OVER'));
    }
}
async function restart() {
    do {
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer.prompt([{
                type: "input",
                name: 'restart_game',
                message: 'Do you want to retart the game if yes then enter y'
            }]);
    } while (restart.restart_game === 'y' || restart.restart_game === 'Y' || restart.restart_game === 'yes' || restart.restart_game === 'YES');
}
await restart();
