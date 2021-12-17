import { Client } from './class/Client.js'; 
import { CheckingAccount } from './class/CheckingAccount.js';

const client1 = new Client();
client1.name = "Evison";
client1.cpf = 11122233301;

const checkingAccount1 = new CheckingAccount();
checkingAccount1.agency = 1001;
checkingAccount1.client = client1;

const client2 = new Client();
client2.name = "Viviane";
client2.cpf = 99988877701;

const checkingAccount2 = new CheckingAccount();
checkingAccount2.agency = 1002;
checkingAccount2.client = client2;

checkingAccount1.deposit(1600);
checkingAccount1.transfer(400, checkingAccount2);

console.log(checkingAccount1._balance);
console.log(checkingAccount2._balance);