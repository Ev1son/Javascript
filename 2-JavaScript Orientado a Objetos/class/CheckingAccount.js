export class CheckingAccount {
  agency;
  client;

  _balance = 0;

  withdraw(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`\nSaque de ${amount} reais realizado com sucesso.\n`);
      return amount;
    }
  }

  deposit(amount) {
    if (amount <= 0) {
      return console.log("\nValor inválido.\n");
    }
    this._balance += amount;
    console.log(`\nDepósito de ${amount} reais realizado com sucesso.\n`)
  }

  withdrawNoMessage(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      return amount;
    }
  }

  depositNoMessage(amount) {
    if (amount <= 0) return
    this._balance += amount;
  }

  transfer(amount, account) {
    if (amount <= 0) return console.log("\nValor inválido.\n");
    if (amount > this._balance) return console.log("\nErro! Você está tentando transferir uma quantia maior que o seu saldo.\n")

    if (amount > this._saldo) return console.log("\nO saldo dessa conta é insuficiente.\n");

    this.withdrawNoMessage(amount);
    account.depositNoMessage(amount);
    console.log(`\nTransferência de ${amount} reais de ${this.client.name} para ${account.client.name} realizado com sucesso.\n`);
  }
}