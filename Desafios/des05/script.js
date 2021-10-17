/* Tenho quase certeza que há formas mais eficientes de resolver esse problema, procurar futuramente. Meus conhecimentos atuais me levaram a resolver dessa forma com muito mais linhas de código */
function converter() {
    var metros = Number(prompt('Digite uma distância (metros)'))

    var Km = metros / 1000
    var Hm = metros / 100
    var Dam = metros / 10
    var dm = metros * 10
    var cm = metros * 100
    var mm = metros * 1000

    /* Essa forma de adicionar conteúdo a uma tag foi a primeira forma que descobri, mas dá mais trabalho e tem mais linhas de código. O melhor é criar o elemento vazio no html, identifica-lo pelo id no JS  e então usar innerHTML para editar seu conteúdo.*/

    //Adicionando o h1
    var h1Novo = document.createElement('h1') //criação da tag via JS
    var h1Conteudo = document.createTextNode(`A distância de ${metros} metros equivale a:`) //conteúdo da tag
    h1Novo.appendChild(h1Conteudo) //dei o conteúdo para a tag
    document.getElementById('aqui').appendChild(h1Novo) //setei onde a tag deve ficar

    //Adicionando o primeiro p (igual a criação do h1)
    var pNovo = document.createElement('p')
    var pConteudo = document.createTextNode(`${Km} Km`)
    pNovo.appendChild(pConteudo)
    document.getElementById('aqui').appendChild(pNovo)

    var pNovo = document.createElement('p')
    var pConteudo = document.createTextNode(`${Hm} Hm`)
    pNovo.appendChild(pConteudo)
    document.getElementById('aqui').appendChild(pNovo)

    var pNovo = document.createElement('p')
    var pConteudo = document.createTextNode(`${Dam} Dam`)
    pNovo.appendChild(pConteudo)
    document.getElementById('aqui').appendChild(pNovo)

    var pNovo = document.createElement('p')
    var pConteudo = document.createTextNode(`${dm} dm`)
    pNovo.appendChild(pConteudo)
    document.getElementById('aqui').appendChild(pNovo)

    var pNovo = document.createElement('p')
    var pConteudo = document.createTextNode(`${cm} cm`)
    pNovo.appendChild(pConteudo)
    document.getElementById('aqui').appendChild(pNovo)

    var pNovo = document.createElement('p')
    var pConteudo = document.createTextNode(`${mm} mm`)
    pNovo.appendChild(pConteudo)
    document.getElementById('aqui').appendChild(pNovo)
}