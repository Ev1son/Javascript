class Client {
  nome;
  cpf;

}

class CheckingAccount {
  agencia;
  saldo;

  sacar(valor) {
    console.log(`Você está tentando sacar ${valor} reais`)
    if(this.saldo >= valor){
      this.saldo -= valor;
      console.log("Saque Efetuado.");
      console.log(`Seu novo saldo é: ${valor} reais`);
    } else {
      console.log("Saldo Insuficiente.");
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
contaCorrente1.saldo = 100;
contaCorrente1.agencia = 1001;

contaCorrente1.sacar(50);

/* console.log(client1);
console.log(client2); */