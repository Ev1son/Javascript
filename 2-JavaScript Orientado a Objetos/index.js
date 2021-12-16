class Client {
  nome;
  cpf;

}

class CheckingAccount {
  agencia;
  saldo;

  sacar(valor) {
    console.log(`Saldo atual: ${this.saldo} reais`);
    console.log(`Você está tentando sacar ${valor} reais`);
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log("Saque Efetuado.");
      console.log(`Seu novo saldo é: ${this.saldo} reais`);
    } else {
      console.log("Saldo Insuficiente.");
    }
  }

  depositar(valor) {
    console.log(`Saldo atual: ${this.saldo} reais`);
    console.log(`Você está tentando depositar ${valor} reais`);
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito Efetuado.`);
      console.log(`Seu novo saldo é: ${this.saldo} reais`);
    } else {
      console.log("Erro ao tentar depositar.")
    }
  }
}

const client1 = new Client();
client1.nome = "Evison";
client1.cpf = 11122233301;

const client2 = new Client();
client2.nome = "Viviane";
client2.cpf = 99988877701;

const contaCorrente1 = new CheckingAccount();
contaCorrente1.saldo = 80;
contaCorrente1.agencia = 1001;

/* contaCorrente1.sacar(50);
contaCorrente1.depositar(100); */

console.log(contaCorrente1);