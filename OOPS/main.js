import inquirer from "inquirer";
async function question() {
    let per = await inquirer.prompt([{
            name: 'que',
            type: 'list',
            choices: [1, 2],
            message: 'Press 1 if you like to talk other , Press 2 if you do not talk to other'
        }]);
    let person = new Person();
    person.AskQuestion(per.que);
    let per2 = await inquirer.prompt([{
            name: 'que2',
            type: 'input',
            message: 'Enter your name'
        }]);
    let student = new Student();
    let name2 = student.setName(per2.que2);
    let name3 = student.getName();
    console.log(`You name is ${name3} and your personality is ${student.personality} `);
}
class Person {
    personality;
    constructor() {
        this.personality = 'Mystery';
    }
    AskQuestion(anwer) {
        if (anwer === 1) {
            this.personality = 'Extravert';
            console.log(`You are : ${this.personality} person `);
        }
        else if (anwer === 2) {
            this.personality = 'Introvert';
            console.log(`You are : ${this.personality} person `);
        }
    }
}
class Student extends Person {
    name = '';
    setName(names) {
        this.name = names;
    }
    getName() {
        return this.name;
    }
}
question();
