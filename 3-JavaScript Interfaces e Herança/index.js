import { Client } from './class/Client.js';
import { CheckingAccount } from './class/CheckingAccount.js';
import { SavingsAccount } from './class/SavingsAccount.js';

const client1 = new Client("Evison", 11122233301);
const client2 = new Client("Viviane", 99988877701);

const checkingAccount1 = new CheckingAccount(101, client1);
const checkingAccount2 = new CheckingAccount(102, client2);

const savingsAccount1 = new SavingsAccount(201, client1, 1200);

console.log(checkingAccount1);
console.log(checkingAccount2);
console.log(savingsAccount1);
