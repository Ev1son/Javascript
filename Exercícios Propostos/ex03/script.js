function contar() {
    var iniciotxt = document.getElementById('ini')
    var inicio = Number(iniciotxt.value)

    var fimtxt = document.getElementById('fim')
    var fim = Number(fimtxt.value)

    var passotxt = document.getElementById('pas')
    var passo = Number(passotxt.value)
    if (fim == '') {
        var pNovo = document.createElement('p')
        var pConteudo = document.createTextNode(`Impossível contar sem "Fim"`)
        pNovo.appendChild(pConteudo)
        document.getElementById('res').appendChild(pNovo)
    }
    if (inicio == '') {
        inicio = 1
        alert('Início não pode ser vazio. Considerando Início = 1')
    }
    if (passo == '') {
        passo = 1
        alert('Passo não pode ser vazio. Considerando Passo = 1')
    }
    if (inicio > fim) {
        for (inicio; inicio >= fim; inicio = inicio - passo) {
            var pNovo = document.createElement('p')
            var pConteudo = document.createTextNode(`${inicio} `)
            pNovo.appendChild(pConteudo)
            document.getElementById('res').appendChild(pNovo)
        }
    } else {
        for (inicio; inicio <= fim; inicio = inicio + passo) {
            var pNovo = document.createElement('p')
            var pConteudo = document.createTextNode(`${inicio} `)
            pNovo.appendChild(pConteudo)
            document.getElementById('res').appendChild(pNovo)
        }
    }
}
