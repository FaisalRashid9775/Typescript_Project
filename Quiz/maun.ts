import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";

let marks=0

async function start() {
    let startQuiz= await inquirer.prompt([{
        name: 'start',
        type:'list',
        choices : ['Yes', 'No'],
        message : 'Do you want too start the quiz'
    }])
    
    
    if(startQuiz.start==='Yes'){
        console.log(chalk.green(`Quiz start`))
        quiz()
    }
    if(startQuiz.start==='No'){

    }



    async function quiz() {
        let quizQuestion = await inquirer.prompt([{
            name: 'Question1',
            type : 'list',
            choices : ['HTML','Javascript','CSS','Java'],
            message : 'Which language can run into each browser'
        },{
            name: 'Question2',
            type : 'list',
            choices : ['Javascript','CSS','Java','C'],
            message : 'Typerscript compiler complie into'
        },{
            name: 'Question3',
            type : 'list',
            choices : ['String','Number','Boolean','Object'],
            message : 'Type of  "4"  is '
        },{
            name: 'Question4',
            type : 'list',
            choices : ['@','$','*','#'],
            message : 'Which character use for private variable in typescript'
        },{
            name: 'Question5',
            type : 'list',
            choices : ['Typescript','Solidity','Java','Javascript'],
            message : 'Which language do not support concept of opps'
        }])
        if (quizQuestion.Question1==='Javascript'){
            marks=marks+10
        }            
        if (quizQuestion.Question2==='Javascript'){
            marks=marks+10
        }
   
        if (quizQuestion.Question3==='String'){
            marks=marks+10
        }
        if (quizQuestion.Question4==='#'){
            marks=marks+10
        }
        if (quizQuestion.Question5==='Javascript'){
            marks=marks+10
        }
        
        if (marks<20){
            console.log(chalk.red(`You could not pass the Quiz Try again`))
            console.log(`You got ${marks}/50`)
        }
        else{
            console.log(chalk.green(`PASS`))
            console.log(`You got ${marks}/50`)
        }
     
       
    }

}



start()
