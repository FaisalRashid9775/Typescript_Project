import { IBank } from "./Ibank";
import Customer from "./customer";

let balance :number

export class BankAccount implements IBank {
    setBalance(balances: number){
        balance=balances
        
    }
    CheckBalance(){
        console.log(`Your Current Balance is : ${balance}`)
    }
    Debit(amount : number): number {
        if (balance> amount){
            balance=balance-amount
            console.log(`Transaction suceessful`)
        }
        else {
            console.log(`You have insufficient Balance.`)
            console.log(`Your Balance is ${balance}`)
        }
        return balance
    }
    Credit(amount:number): number {
        if (amount>=100){
            balance=balance-1
        }        
        return balance
    }
}