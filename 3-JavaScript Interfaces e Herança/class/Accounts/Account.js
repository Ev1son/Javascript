import { Client } from './Client.js';

export class Account {
  constructor(agency, client, balance) {
    if(this.constructor == Account){
      throw new Error("Você não deveria instanciar um objeto do tipo 'Account' diretamente, pois essa é uma classe abstrata");
    }
    
    this._agency = agency;
    this._client = client;
    this._balance = balance;    
  }

  set client(newClient) {
    if (newClient instanceof Client) {
      this._client = newClient;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  withdraw(amount) {
    throw new Error("O método 'withdraw' precisa ser sobrescrito na classe que for chamado, pois é um método abstrato ")
  }

  _withdraw(rate, amount){
    const amountWithdrawn= rate * amount;
    if (this._balance >= amountWithdrawn) {
      this._balance -= amountWithdrawn;
      return amountWithdrawn;
    }
    return 0;
  }

  deposit(amount) {
    this._balance += amount;
  }

  transfer(amount, account) {
    if (amount > this._balance) return console.log("\nO saldo dessa conta é insuficiente.\n");
    if (amount <= 0) return console.log("\nValor inválido.\n");

    this.withdraw(amount);
    account.deposit(amount);
    console.log(`\nTransferência de ${amount} reais de ${this.client.name} para ${account.client.name} realizado com sucesso.\n`);
  }
}