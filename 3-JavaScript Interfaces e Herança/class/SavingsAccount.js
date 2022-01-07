import { Account } from './Account.js';

export class SavingsAccount extends Account {
  constructor (agency, client, initialBalance){
    super(agency, client, initialBalance);
  }
}