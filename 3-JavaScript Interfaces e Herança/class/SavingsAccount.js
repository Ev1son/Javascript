import { Account } from './Account.js';

export class SavingsAccount extends Account {
  constructor (agency, client, initialBalance){
    super(agency, client, initialBalance);
  }

  withdraw(amount){
    const rate = 1.02;
    return this._withdraw(rate, amount);
  }

}