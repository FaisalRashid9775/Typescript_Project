import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";

figlet('Calculator fx-100', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.green( data))
});

async function repeat(){
    const repeatFunc= await inquirer.prompt([{
        name: 'repeat',
        type : 'list',
        choices : ['Yes','No'],
        message : 'Do you want to perform another function'
    }])
    return (repeatFunc.repeat=='Yes' ? true : false)
}

async function askQuestion(){
   let  repeatfunction= true

   do {
    const answer= await inquirer.prompt([{
        name : 'operator',
        type : 'list',
        choices : ['Addition', 'Substraction', 'Multiplication','Division', 'Power'],
        message : 'Which operation do you want to do'
    },{
        name : 'num1',
        type : 'number',
        message : 'Enter first Number'
    },{
        name : 'num2',
        type : 'number',
        message : 'Enter your secon Number'
    }])

    if (answer.operator=='Addition'){
        console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2} `))
        repeatfunction = await repeat()
    }
    else if (answer.operator=='Substraction'){
        console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2} `))
        repeatfunction = await repeat()
    }
    else if (answer.operator=='Multiplication'){
        console.log(chalk.green(`${answer.num1} x ${answer.num2} = ${answer.num1 * answer.num2} `))
        repeatfunction == await repeat()
    }
    else if (answer.operator=='Division'){
        console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2} `))
        repeatfunction = await repeat()
    }
    else if (answer.operator=='Power'){
        console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 ** answer.num2} `))
        repeatfunction = await repeat()
    }
} while(repeatfunction !== false)
}

setTimeout(()=>{
    askQuestion()
},1000)