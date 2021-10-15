function contar(){
    var iniciotxt = document.getElementById('ini')
    var inicio = Number(iniciotxt.value)

    var fimtxt = document.getElementById('fim')
    var fim = Number(fimtxt.value)

    var passotxt = document.getElementById('pas')
    var passo = Number(passotxt.value)

    alert(`mostrar ${inicio}, ${fim} e ${passo}`) //teste das variáveis
}
