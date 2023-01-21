import inquirer from "inquirer";
import cashwithdraw from "./cashwithdraw.js";
import users from "./users.js";
import cashdeposit from "./cashdeposit.js";
import transfer from "./transfer.js";
import UtilityBill from "./utilityBills.js";
import chalk from "chalk";

async function anotherTransaction() {
  const newTrans = await inquirer.prompt([
    {
      name: "newTrans",
      type: "list",
      choices: ["Yes", "No"],
      message: "Do you want another transaction",
    },
  ]);
  return newTrans.newTrans;
}

async function mainScreen(balance: number) {
  do {
    let option = await inquirer.prompt([
      {
        name: "menu",
        type: "list",
        choices: [
          "Balance Inquiry",
          "Cash Withdraw",
          "Cash Depoist",
          "Transfer",
          "Utility Bills",
          "Exit",
        ],
        message: "Please select an option",
      },
    ]);
    switch (option.menu) {
      case "Balance Inquiry":
        console.log(chalk.green("your Current balance is : ", balance));
        break;
      case "Cash Withdraw":
        balance = await cashwithdraw(balance);
        console.log(chalk.green(`Transaction sucessfull ! Your new balance is ${balance}`));
        break;
      case "Cash Depoist":
        console.log(balance);
        balance = await cashdeposit(balance);
        console.log(chalk.green(`Transaction sucessfull ! Your new balance is ${balance}`));
        break;
      case "Transfer":
        balance = await transfer(balance);
        console.log(chalk.green(`Transaction sucessfull ! Your new balance is ${balance}`));
        break;
      case "Utility Bills":
        balance = await UtilityBill(balance);
        console.log(chalk.green(`Transaction sucessfull ! Your new balance is ${balance}`));

        break;
      case "Exit":
        console.clear()
        console.log(chalk.gray('Thank you for using our services'))
        break;
    }
    if (option.menu !== "Exit") {
      var anotherTrans = await anotherTransaction();
    }
    if (anotherTrans=='No'){
        console.log(chalk.gray('Thank you for using our services'))
    }
  } while (anotherTrans != "No");
}

export default mainScreen;
