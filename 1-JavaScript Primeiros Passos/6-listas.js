console.log("Trabalhando com Listas");

const destinos = new Array(
  "Cotijuba",
  "Marajó",
  "Mosqueiro"
)

//Mostrando todos os itens da lista
console.log(destinos);

//Adicionando itens dinamicamente
destinos.push("Alter do Chão");

console.log(destinos);

//Removendo itens
destinos.splice(2,1);
console.log(destinos);

//Mostrando o valor de um índice específico
console.log(destinos[1]);