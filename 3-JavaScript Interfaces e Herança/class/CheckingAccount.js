import { Account } from './Account.js';

export class CheckingAccount extends Account{
  static numberOfAccounts = 0;
  constructor (agency, client, balance) {
    super(agency, client, 0);
    CheckingAccount.numberOfAccounts++;
  }
}