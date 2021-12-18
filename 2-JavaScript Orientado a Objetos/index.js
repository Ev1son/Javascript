import { Client } from './class/Client.js';
import { CheckingAccount } from './class/CheckingAccount.js';

const client1 = new Client("Evison", 11122233301);
const client2 = new Client("Viviane", 99988877701);

const checkingAccount1 = new CheckingAccount(1001, client1);
const checkingAccount2 = new CheckingAccount(1002, client2);

console.log(checkingAccount1,checkingAccount2);