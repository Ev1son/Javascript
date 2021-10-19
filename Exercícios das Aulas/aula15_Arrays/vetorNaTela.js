var vetor = [2, 7, 5, 8, 0, 3, 9]

/* 
Maneira padrão

for (let pos = 0 ; pos < vetor.length ; pos++){
  console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}  */

// Essa nova sintaxe só funciona em arrays e objects
// Lê-se: para cada posição dentro da variável vetor. 
for (let pos in vetor){
  console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}

