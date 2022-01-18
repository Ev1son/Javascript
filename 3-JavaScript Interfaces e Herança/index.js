import { Client } from './class/Client.js';
import { CheckingAccount } from './class/CheckingAccount.js';
import { SavingsAccount } from './class/SavingsAccount.js';
import { Account } from './class/Account.js';

const client1 = new Client("Evison", 11122233301);
const client2 = new Client("Viviane", 99988877701);

const checkingAccount1 = new CheckingAccount(101, client1);
const savingsAccount1 = new SavingsAccount(201, client1, 1200);
const account1 = new Account(103, client1, 100);

console.log(account1);
/* console.log(savingsAccount1); */
