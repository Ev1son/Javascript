console.log("Trabalhando com Condições");

const destinos = new Array(
  "Cotijuba",
  "Marajó",
  "Mosqueiro"
);

const idadeComprador = 18;
const estaAcompanhado = true;

//Mostrando todos os itens da lista
console.log("Destinos possíveis:");
console.log(destinos);

if (idadeComprador >= 18) {
  console.log("Comprador tem mais de 18 anos");
  truePurchase();
} else if (estaAcompanhado == true) {
  console.log("O comprador é menor de idade, mas está acompanhado");
  truePurchase();
} else {
  console.log("É necessário ser maior de 18 anos para realizar a compra");
  console.log("Compra não realizada");
}

function truePurchase() {
  destinos.splice(2, 1);
  console.log("Compra realizada");
  console.log(destinos);
}