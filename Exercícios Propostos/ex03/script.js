function contar() {
    var iniciotxt = document.getElementById('ini')
    var inicio = Number(iniciotxt.value)

    var fimtxt = document.getElementById('fim')
    var fim = Number(fimtxt.value)

    var passotxt = document.getElementById('pas')
    var passo = Number(passotxt.value)

    var res = document.getElementById('res')

    var titulo = document.getElementById('titulo')

    if (inicio == '') { //se início vazio
        inicio = 1
        alert('Início não pode ser vazio. Considerando Início = 1')
    }
    if (passo == '') { //se passo vazio
        passo = 1
        alert('Passo não pode ser vazio. Considerando Passo = 1')
    }
    if (inicio > fim) { //se inicio for maior que fim
        
        res.innerHTML = '' //Limpa a div 'res' para não aparecer a contagem antiga
        if (fim == '') { //se fim for vazio retorna mensagem de erro
            var pNovo = document.createElement('p')
            var pConteudo = document.createTextNode(`Impossível contar sem "Fim"`)
            pNovo.appendChild(pConteudo)
            document.getElementById('res').appendChild(pNovo)
        } else {
            res.innerHTML = ''

            for (inicio; inicio >= fim; inicio = inicio - passo) {
                titulo.innerHTML = `Contando ...` //substitui o conteúdo do h2 'título'

                var pNovo = document.createElement('p')
                var pConteudo = document.createTextNode(`${inicio} `)
                pNovo.appendChild(pConteudo)
                document.getElementById('res').appendChild(pNovo)
            }
        }
    } else {
        res.innerHTML = ''

        for (inicio; inicio <= fim; inicio = inicio + passo) {
            titulo.innerHTML = `Contando ...` 

            var pNovo = document.createElement('p')
            var pConteudo = document.createTextNode(`${inicio} `)
            pNovo.appendChild(pConteudo)
            document.getElementById('res').appendChild(pNovo)
            titulo.innerHTML = `Contando ...`
        }
    }
}
