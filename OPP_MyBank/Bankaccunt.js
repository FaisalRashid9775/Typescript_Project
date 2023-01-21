"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
let balance;
class BankAccount {
    setBalance(balances) {
        balance = balances;
    }
    CheckBalance() {
        console.log(`Your Current Balance is : ${balance}`);
    }
    Debit(amount) {
        if (balance > amount) {
            balance = balance - amount;
            console.log(`Transaction suceessful`);
        }
        else {
            console.log(`You have insufficient Balance.`);
            console.log(`Your Balance is ${balance}`);
        }
        return balance;
    }
    Credit(amount) {
        if (amount >= 100) {
            balance = balance - 1;
        }
        return balance;
    }
}
exports.BankAccount = BankAccount;
