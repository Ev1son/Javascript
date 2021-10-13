function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //fullyear pra pegar os 4 dígitos
    var fAno = document.getElementById('txtano') //comando para linkar a variável no js com o valor inserido no elemento de id 'txtano' q é o input de caixa de texto
    var res = document.getElementById('res') // comando para linkar a variável no js com a div de id 'res'
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Ano Inválido, verifique os dados e tente novamente.')     //se um valor inválido for inserido, mostra msg de erro
    } else {
        var fSex = document.getElementsByName('radsex') //comando para linkar a variável no js com os elementos input radio
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') //criará via js uma tag img no html
        if (fSex[0].checked) { //se input radio 0 (masculino) estiver marcado
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-m.png')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        /* res.style.textAlign = 'center' // centraliza o texto apenas qd o resultado for mostrado. Não é necessário nesse caso pois já configurei a centralização no CSS da tag DIV */
        res.innerHTML = `Foi detectado: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}