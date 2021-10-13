var idade = 17
if (idade < 16) {
    var voto = 'não vota'
} else if (idade < 18 || idade > 65) { 
    var voto = 'tem voto opcional'
} else {
    var voto = 'tem voto obrigatório'
}
console.log(`Você tem ${idade} anos, logo, ${voto}`)
