function comprar(){
    var produto = prompt('Qual o produto que você está comprando ?')
    var preço = Number(prompt(`Quanto custa o(a) ${produto} comprado ?`)) //Tipo da variável declarada como Number para o JS não receber o valor como string
    var valor = Number(prompt('Qual o valor fornecido para o pagamento ?'))

    var troco = valor - preço //Não é necessário declarar 'troco' como Number pois 'valor' e 'preço' já estão declaradas como Number

    var $preço = preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //Converte o Number para a moeda local
    
    var $valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    var $troco = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    

    alert(`Você realizou a compra de ${produto} que custa ${$preço}.\nRealizou o pagamento com o valor de ${$valor} e deve receber ${$troco} de troco.\nVolte Sempre!`)
}