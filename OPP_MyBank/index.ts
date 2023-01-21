import Customer from "./customer";
import { BankAccount } from "./Bankaccunt";


let customer1=new Customer('Ali','Male',27,'03001234567',12345)
let customer2=new Customer('Alya','Female',27,'03001234567',12345)

console.log(customer1)

let transaction= new BankAccount()
transaction.setBalance(10000)
transaction.CheckBalance()
transaction.Debit(9000)
transaction.CheckBalance()
transaction.Credit(100)
transaction.CheckBalance()


