let numberValue = document.getElementById('addNumber')
let numberList = document.getElementById('numberList')
let results = document.getElementById('results')


var arrayValues = []

document.getElementById('addNumberButton').addEventListener('click', addNumberToArray)

function addNumberToArray() {
  numberValue = document.getElementById('addNumber')
  if (numberValue.value >= 1 && numberValue.value <= 100) {
    arrayValues.push(numberValue.value)
    console.log(arrayValues)
    addValueToList()
  } else {
    alert('Valor Inválido!')
  }
}

function addValueToList() {
  let option = document.createElement('option')
  
  option.innerHTML = addNumber.value
  numberList.appendChild(option)
  /* console.log(numberValue) */
}