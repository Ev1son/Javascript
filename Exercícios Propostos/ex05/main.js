let numberValue = document.getElementById('inputAddNumber')
let selectNumberList = document.getElementById('selectNumberList')

var arrayValues = []

document.getElementById('addNumberButton').addEventListener('click', addNumberToArray)

function addNumberToArray() {
  numberValue = document.getElementById('inputAddNumber')
  if (numberValue.value >= 1 && numberValue.value <= 100) {
    arrayValues.push(Number(numberValue.value))
    console.log(arrayValues)
    addValueToList()
  } else {
    alert('Valor Inválido!')
  }
}

function addValueToList() {
  let option = document.createElement('option')
  option.innerHTML = `O valor ${numberValue.value} foi adicionado`
  selectNumberList.appendChild(option)
}