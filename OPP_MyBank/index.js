"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
const Bankaccunt_1 = require("./Bankaccunt");
let customer1 = new customer_1.default('Ali', 'Male', 27, '03001234567', 12345);
let customer2 = new customer_1.default('Alya', 'Female', 27, '03001234567', 12345);
console.log(customer1);
let transaction = new Bankaccunt_1.BankAccount();
transaction.setBalance(10000);
transaction.CheckBalance();
transaction.Debit(9000);
transaction.CheckBalance();
transaction.Credit(100);
transaction.CheckBalance();
