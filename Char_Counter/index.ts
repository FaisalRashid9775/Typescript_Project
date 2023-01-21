#! usr/bin / env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation'


const sleep = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(res,2000)
    })
}

async function welcome(){
    const rainbow = chalkAnimation.rainbow(`------ Lets start programing -------`)
    await sleep()
    rainbow.stop()
}

 

async function askQuestion() {
    let que= await inquirer.prompt([{
        type : 'input',
        name : 'Question',
        message : chalk.red('Enter your Paragraph')
    }])

    let word_array=que.Question.split(' ')
    console.log(`Number of character in given paragraph is ${word_array.length}`)

    let char_array=que.Question.replace(/ /g, '')
    console.log(`Number of character in given paragraph is ${char_array.length}`)
    
}


async function playAgain() {
    await welcome()
    do{
        await askQuestion()
        var restart= await inquirer.prompt([{
            name : 'Option',
            type : 'input',
            message : 'Do you want to play again if yes press Y'
        }])
    }while(restart.Option==='Y' || restart.Option==='y')
    
}

playAgain()