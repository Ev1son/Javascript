console.log("Trabalhando com Condições e Operadores Lógicos");

const destinos = new Array(
  "Cotijuba",
  "Marajó",
  "Mosqueiro"
);

const idadeComprador = 17;
const estaAcompanhado = true;
let temPassagem = false;
const destino = "Marajó";

console.log("\nDestinos possíveis:");
console.log(destinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

while(contador < destinos.length){  
  if(destinos[contador] == destino){
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log("Destino:", destinoExiste);

if(podeComprar && destinoExiste){
  console.log("Boa Viagem!");
} else {
  console.log("Erro");
}