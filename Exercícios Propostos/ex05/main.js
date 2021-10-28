let numberValueTxt = document.getElementById('inputAddNumber')

let arrayValues = []

document.getElementById('addNumberButton').addEventListener('click', addNumberToArray)

function addNumberToArray() {
  numberValue = document.getElementById('inputAddNumber')
  if (checkNumber(true) && checkList(true)) {
    arrayValues.push(numberValue.valueAsNumber)
    console.log(arrayValues)
    addValueToList()
  } else {
    alert('Valor Inválido! Verifique os dados.')
  }
}

function addValueToList() {
  let selectNumberList = document.getElementById('selectNumberList')
  let option = document.createElement('option')

  option.innerHTML = `O valor ${numberValue.valueAsNumber} foi adicionado`
  selectNumberList.appendChild(option)
}

function checkNumber() {
  if (numberValue.valueAsNumber >= 1 && numberValue.valueAsNumber <= 100) {
    return true
  } else {
    return false
  }
}

function checkList() {
  if (arrayValues.indexOf(numberValue.valueAsNumber) == -1) {
    return true
  } else {
    return false
  }
}