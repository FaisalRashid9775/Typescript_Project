import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'
import chalk from 'chalk'


let yourHealth = 100

let enemeies: string[] = ['SKELETON', 'ZOOMBIE', 'MONSTERS', 'GAINT DIANOURSE']
let healthPortion = 40
let healthPortionGain = 3



const sleep = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)

})

async function Welcome() {
    const welcomeMsg = chalkAnimation.rainbow('Welcome to dungeon game')
    await sleep()
    welcomeMsg.stop()

}


async function Question() {
    let num = Math.floor(Math.random() * 4)
    let enemeyHealth = Math.floor((Math.random() * 75))
    console.log(chalk.red(`         # ${enemeies[num]} has appeared`))
    console.log(`Your Health : ${yourHealth}`)
    console.log(`Enemey Health : ${enemeyHealth}`)
    let question = await inquirer.prompt([{
        name: 'que',
        type: 'list',
        choices: ['Attack', 'Drink Health Portion', 'Run'],
        message: 'What you want to do'
    }])
    if (question.que === 'Attack') {
        yourHealth = yourHealth - enemeyHealth
        console.log(`You strike the enemey for ${enemeyHealth - 10} damage`)
        console.log(`You receive ${enemeyHealth - 5} relatation`)
        console.log(`Your Health : ${yourHealth}`)
        if (yourHealth < 20) {
            console.log('Alert ! Low Energy Level Drink some Health portion')
        }
        if (yourHealth < 1) {
            console.log(chalk.red(`Game over ! You are kill by ${enemeies[num]}`))
        }

    }
    else if (question.que === 'Drink Health Portion') {
        --healthPortionGain
        console.log(chalk.yellow(`Portion remaing : ${healthPortionGain}`))
        
        
        
        if (healthPortionGain > 0) {
            yourHealth = yourHealth + healthPortion
            console.log(chalk.green(`Now your Health is now : ${yourHealth}`))
        }
        else {
            console.log(`You can not gain more health`)
        }

    }
    else if (question.que === 'Run') {
        console.log(chalk.yellow(`Running`))
        console.log(chalk.red(`You are running and will be caught by ${enemeies[num]} in 5 seconds`))

        await setTimeout(() => console.log(
            chalk.red(`You are caught by ${enemeies[num]}`))
            , 5000)

    }
}



async function restart() {
    do {
        await Welcome()
        await Question()
        var question2 = await inquirer.prompt([{
            name: 'que2',
            type: 'input',
            message: 'Do you want to play again Y for Yes and N for No'
        }])
    } while (question2.que2 === 'y' || question2.que2 === 'Y' || question2.que2 === 'yes' || question2.que2 === 'YES')
}

restart()


// Reset Welcome function show in all features.
// settimeout call before retstart