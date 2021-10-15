function calcular() {

    var tabuada = document.getElementById('tabuada')
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value) //conversão de string para number
    var c = 1

    if (numtxt.value.length == 0) {
        alert('Insira um valor para calcular!')
    } else {
        tabuada.innerHTML = ''
    }
    
    for (c; c <= 10; c++) {

        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}`
        tabuada.appendChild(item)
    }
}
