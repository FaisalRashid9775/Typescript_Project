import chalk from "chalk";
import inquirer from "inquirer";
async function Timer() {
    let timer = await inquirer.prompt([
        {
            name: "time",
            type: "list",
            choices: ["1 Min", "2 Min", "5 Min", "10 Min", "20 Min"],
            message: "Which timer you want to set",
        },
    ]);
    if (timer.time === "1 Min") {
        let timer = 60;
        let time = setInterval(() => {
            --timer;
            let minute = Math.floor(timer / 60);
            let seconds = Math.floor(timer % 60);
            console.log(chalk.green(`Time remaining : ${minute}   minute   ${seconds}  seconds`));
            if (timer < 10) {
                console.log(chalk.red(`Hurry up Time remaining : ${minute}   minute   ${seconds}  seconds`));
            }
            if (timer < 0) {
                clearInterval(time);
                console.log(`Expire`);
            }
        }, 1000);
        setTimeout(() => repeat(), 62000);
    }
    else if (timer.time === "2 Min") {
        let timer = 120;
        let time = setInterval(() => {
            --timer;
            let minute = Math.floor(timer / 60);
            let seconds = Math.floor(timer % 60);
            console.log(chalk.green(`Time remaining : ${minute}   minute   ${seconds}  seconds`));
            if (timer < 10) {
                console.log(chalk.red(`Hurry up Time remaining : ${minute}   minute   ${seconds}  seconds`));
            }
            if (timer < 0) {
                clearInterval(time);
                console.log(`Expire`);
            }
        }, 1000);
        setTimeout(() => repeat(), 124000);
    }
    else if (timer.time === "5 Min") {
        let timer = 300;
        let time = setInterval(() => {
            --timer;
            let minute = Math.floor(timer / 60);
            let seconds = Math.floor(timer % 60);
            console.log(chalk.green(`Time remaining : ${minute}   minute   ${seconds}  seconds`));
            if (timer < 10) {
                console.log(chalk.red(`Hurry up Time remaining : ${minute}   minute   ${seconds}  seconds`));
            }
            if (timer < 0) {
                clearInterval(time);
                console.log(`Expire`);
            }
        }, 1000);
        setTimeout(() => repeat(), 304000);
    }
    else if (timer.time === "10 Min") {
        let timer = 600;
        let time = setInterval(() => {
            --timer;
            let minute = Math.floor(timer / 60);
            let seconds = Math.floor(timer % 60);
            console.log(chalk.green(`Time remaining : ${minute}   minute   ${seconds}  seconds`));
            if (timer < 10) {
                console.log(chalk.red(`Hurry up Time remaining : ${minute}   minute   ${seconds}  seconds`));
            }
            if (timer < 0) {
                clearInterval(time);
                console.log(`Expire`);
            }
        }, 1000);
        setTimeout(() => repeat(), 604000);
    }
    else if (timer.time === "20 Min") {
        let timer = 1200;
        let time = setInterval(() => {
            --timer;
            let minute = Math.floor(timer / 60);
            let seconds = Math.floor(timer % 60);
            console.log(chalk.green(`Time remaining : ${minute}   minute   ${seconds}  seconds`));
            if (timer < 10) {
                console.log(chalk.red(`Hurry up Time remaining : ${minute}   minute   ${seconds}  seconds`));
            }
            if (timer < 0) {
                clearInterval(time);
                console.log(`Expire`);
            }
        }, 1000);
        setTimeout(() => repeat(), 124000);
    }
}
Timer();
async function repeat() {
    var restart = await inquirer.prompt([
        {
            name: "Repeat",
            type: "List",
            choices: ['Yes', 'No'],
            message: "Do you want to use again Press Y for Yes",
        },
    ]);
    if (restart.Repeat === 'Yes') {
        Timer();
    }
    else {
    }
}
