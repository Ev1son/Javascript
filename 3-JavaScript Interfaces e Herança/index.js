import { Client } from './class/Client.js';
import { CheckingAccount } from './class/CheckingAccount.js';
import { SavingsAccount } from './class/SavingsAccount.js';
import { Account } from './class/Account.js';
import { SalaryAccount } from './class/SalaryAccount.js';

const client1 = new Client("Evison", 11122233301);
const client2 = new Client("Viviane", 99988877701);

const checkingAccount1 = new CheckingAccount(101, client1);
const savingsAccount1 = new SavingsAccount(201, client1, 1200);

const salario = new SalaryAccount(client1)
salario.deposit(200);
salario.withdraw(50);
console.log(salario);
/* console.log(savingsAccount1); */
