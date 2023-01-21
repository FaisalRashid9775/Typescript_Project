import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'

let dollarToPKR = 228.70
let PKRToDollar= 0.0044
let euroTOPKR = 245.39
let PKRToEuro = 0.0041
let DollarToEuro = 0.93
let EuroToDollar = 1.07

const sleep = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(res,2000)
    })
}

async function welcome(){
    const rainbow = chalkAnimation.rainbow(`------ Lets start Converting -------`)
    await sleep()
    rainbow.stop()
}

async function Converter() {
    let Currency= await inquirer.prompt([{
        name : 'CurrencyFROM',
        type : 'list',
        choices : ['USD','PKR', 'EUR'],
        message : 'Select currency from which you want to convert it'
    },{
        name : 'CurrencyTO',
        type : 'list',
        choices : ['USD','PKR', 'EUR'],
        message : 'Select currency which you want to convert '
    },{
        name : 'Amount',
        type : 'input',
        message : 'Enter your Amount'
    }])    

    switch(Currency.CurrencyFROM) {
        case 'USD':
            if (Currency.CurrencyTO === 'PKR'){
                let amount= Currency.Amount*dollarToPKR
                console.log(`Your Amount in PKR is ${amount}`)
                break
            }
            else if (Currency.CurrencyTO==='EUR'){
                let amount = Currency.Amount*DollarToEuro
                console.log(`Your amount in Euro is ${amount}`)
            }
        
        case 'PKR':
            if (Currency.CurrencyTO === 'USD'){
                let amount= Currency.Amount*PKRToDollar
                console.log(`Your Amount in USD is ${amount}`)
                break
            }
            else if (Currency.CurrencyTO==='EUR'){
                let amount = Currency.Amount*PKRToEuro
                console.log(`Your amount in Euro is ${amount}`)
            }
        case 'EUR':
            if (Currency.CurrencyTO === 'PKR'){
                let amount= Currency.Amount*euroTOPKR
                console.log(`Your Amount in PKR is ${amount}`)
                break
            }
            else if (Currency.CurrencyTO==='USD'){
                let amount = Currency.Amount*EuroToDollar
                console.log(`Your amount in Euro is ${amount}`)
            
       }
    }
}


async function convertAgain() {

    await welcome()
    
    do{
        await Converter()
        var restart= await inquirer.prompt([{
            name : 'again',
            type : 'input',
            message : 'Do you want to convert again if yes press Y'
        }])
    }while(restart.again==='Y' || restart.again==='y')
    
}

convertAgain()