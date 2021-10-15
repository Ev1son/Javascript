function contar() {
    var iniciotxt = document.getElementById('ini')
    var inicio = Number(iniciotxt.value) //conversão para number

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

            res.innerHTML += `Impossível contar sem "Fim"! `
        } else {
            res.innerHTML = ''
            //contagem crescente
            for (inicio; inicio >= fim; inicio = inicio - passo) {
                titulo.innerHTML = `Contando ...` //substitui o conteúdo do h2 'título'

                res.innerHTML += `\u{1F449} ${inicio} `
            } res.innerHTML += `\u{1F3C1}`
        }
    } else {
        res.innerHTML = ''
        //contagem decrescente
        for (inicio; inicio <= fim; inicio = inicio + passo) {
            titulo.innerHTML = `Contando ...`

            res.innerHTML += `\u{1F449} ${inicio}  `
        } res.innerHTML += `\u{1F3C1}`

    }
}
