document.getElementById('load')
window.addEventListener('load', carregar)
document.getElementById('converter').addEventListener('click', converter)

/* Quando vc usa os parênteses no final da função ele já executa ela, no caso do evento vc precisa passar a referencia da função para ser executada no momento que o evento acontece (callback) 
se vc usa carregar() ele vai executar quando seu script for executado e não quando a pagina for totalmente carregada */

var valorD = 0

function carregar(){
    valorD = Number(prompt('Digite o valor do dólar hoje').replace(',','.'))
}

//Lembrar de converter a variável somente após a declaração da mesma, um erro simples mas q eu cometi na criação desse código
function converter(){
    let $valorD = valorD.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    let qtdReal = Number(prompt('Quantos R$ você tem ?').replace(',','.'))
    let $qtdReal = qtdReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    let valorR = qtdReal / valorD
    let $valorR = valorR.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    
    let res = document.getElementById('res')
    res.innerHTML = `Considerando o valor do Dólar como ${$valorD} você poderia comprar ${$valorR} dólares com os seus ${$qtdReal}.`
}