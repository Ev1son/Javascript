import { Account } from './Account.js';

export class CheckingAccount extends Account{
  static numberOfAccounts = 0;
  constructor (agency, client, balance) {
    super(agency, client, 0);
    CheckingAccount.numberOfAccounts++;
  }

  //sobrescrevendo o comportamento do método 'withdraw' da classe mãe
  withdraw(amount) {
    let rate = 1.1;
    return this._withdraw(rate, amount);
  }

}