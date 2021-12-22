import { Client } from './Client.js';

export class CheckingAccount {
  static numberOfAccounts = 0;

  constructor (agency, client, balance) {
    this.agency = agency;
    this._client = client;
    this._balance = balance;
    CheckingAccount.numberOfAccounts++;
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
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`\nSaque de ${amount} reais realizado com sucesso.\n`);
      return amount;
    }
  }

  deposit(amount) {
    if (amount <= 0) return console.log("\nValor inválido.\n");
    this._balance += amount;
    console.log(`\nDepósito de ${amount} reais realizado com sucesso.\n`);
  }

  withdrawNoMessage(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      return amount;
    }
  }

  depositNoMessage(amount) {
    this._balance += amount;
  }

  transfer(amount, account) {
    if (amount > this._balance) return console.log("\nO saldo dessa conta é insuficiente.\n");
    if (amount <= 0) return console.log("\nValor inválido.\n");

    this.withdrawNoMessage(amount);
    account.depositNoMessage(amount);
    console.log(`\nTransferência de ${amount} reais de ${this.client.name} para ${account.client.name} realizado com sucesso.\n`);
  }
}