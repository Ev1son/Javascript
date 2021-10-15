function calcular() {

    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)

    if (num == '') {
        alert('Insira um valor para calcular!')
    } else {
        res.innerHTML = ''

        res.innerHTML += `${num} x 0 = ${num * 0} <br>`
        res.innerHTML += `${num} x 1 = ${num * 1} <br>`
        res.innerHTML += `${num} x 2 = ${num * 2} <br>`
        res.innerHTML += `${num} x 3 = ${num * 3} <br>`
        res.innerHTML += `${num} x 4 = ${num * 4} <br>`
        res.innerHTML += `${num} x 5 = ${num * 5} <br>`
        res.innerHTML += `${num} x 6 = ${num * 6} <br>`
        res.innerHTML += `${num} x 7 = ${num * 7} <br>`
        res.innerHTML += `${num} x 8 = ${num * 8} <br>`
        res.innerHTML += `${num} x 9 = ${num * 9} <br>`
        res.innerHTML += `${num} x 10 = ${num * 10} <br>`
    }
}