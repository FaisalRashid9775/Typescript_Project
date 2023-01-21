import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

var todo : string[]=[]


figlet('To do List', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.green(data))
});

async function repeat(){
    const repeat= await inquirer.prompt([{
        name : 'repeatagain',
        type : "list",
        choices : ['Yes','No'],
        message : 'Do want to do another function perfoam'
    }])
    return(repeat.repeatagain==='Yes'? true : false)
}

async function todolist(){
    let repeatagain= true

    do {
    const answer= await inquirer.prompt([{
        name: 'todoList',
        type : 'list',
        choices : ['Add an item','Display Item', 'Remove an item'],
        message : 'Please select an option'
    }])

    if (answer.todoList=='Add an item'){
        const additem= await inquirer.prompt([{
            name :'addItem',
            type: 'input',
            message : 'Enter your to do item'
        }])

        todo.push(additem.addItem)
        repeatagain = await repeat()
    }
    else if (answer.todoList=='Display Item'){
        
        if (todo.length==0){
            console.log(chalk.red( 'You have an empty todo list'))
        }
        todo.forEach(element => console.log(chalk.green(element)))
        repeatagain = await repeat()
    }
    else if (answer.todoList=='Remove an item'){
        if (todo.length==0){
            console.log(chalk.red('You have an empty todo list'))
        }

        let removeItem= await inquirer.prompt([{
            name: 'remove',
            type : 'input',
            message : 'Which item you want to remove'
        }])
        let index= todo.indexOf(removeItem.remove)
        todo.splice(index,1)
        console.log(chalk.green(`Your ${removeItem.remove} is complete`))

        repeatagain = await repeat()
    }
} while(repeatagain !== false)
}

setTimeout(()=>{todolist()},1000)
