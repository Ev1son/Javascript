console.log("Trabalhando com Condições e Operadores Lógicos");

const destinos = new Array(
  "Cotijuba",
  "Marajó",
  "Mosqueiro"
);

const idadeComprador = 17;
const estaAcompanhado = false;
let temPassagem = false;

//Mostrando todos os itens da lista
console.log("Destinos possíveis:");
console.log(destinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
  purchase();
} else {
  console.log("É necessário ser maior de 18 anos ou estar acompanhando de um responsável legal para realizar a compra.");
  console.log("Compra não realizada.");
}

function purchase() {
  destinos.splice(2, 1);
  console.log("Compra realizada.");
  console.log(destinos);
  temPassagem = true;
}

if (temPassagem == true) {
  console.log("\nEmbarque:\n");
  if ((idadeComprador >= 18 || estaAcompanhado == true) && temPassagem == true) {
    console.log("Boa Viagem!");
  } else {
    console.log("Você não pode embarcar.");
  }
}