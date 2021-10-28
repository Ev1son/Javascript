let numberValue = document.getElementById('inputAddNumber')
let results = document.getElementById('divResults')

let arrayValues = []

document.getElementById('addNumberButton').addEventListener('click', addNumberToArray)
document.getElementById('finish').addEventListener('click', showResults)
document.getElementById('clear').addEventListener('click', clear)

function addNumberToArray() {
  numberValue = document.getElementById('inputAddNumber')
  if (checkNumber(true) && checkList(true)) {
    arrayValues.push(numberValue.valueAsNumber)
    addValueToList()
  }
}

function addValueToList() {
  let selectNumberList = document.getElementById('selectNumberList')
  let option = document.createElement('option')

  option.innerHTML = `O valor ${numberValue.valueAsNumber} foi adicionado`
  selectNumberList.appendChild(option)
  inputAddNumber.value = ''
  results.innerHTML = ''
}

function checkNumber() {
  if (numberValue.valueAsNumber >= 1 && numberValue.valueAsNumber <= 100) {
    return true
  } else {
    alert('Valor Inválido. Somente números entre 1 e 100 são válidos.')
    inputAddNumber.value = ''
  }
}

function checkList() {
  if (arrayValues.indexOf(numberValue.valueAsNumber) == -1) {
    return true
  } else {
    alert('Valor já encontrado na lista.')
    inputAddNumber.value = ''
  }
}

function showResults() {
  if (arrayValues.length >= 1) {
    let length = arrayValues.length

    let sum = arrayValues.reduce(function (sum, i) {
      return sum + i
    })

    let media = sum / arrayValues.length

    results.innerHTML = ''

    arrayValues.sort

    results.innerHTML += `<p>Até agora foram cadastrados ${length} números</p>`

    results.innerHTML += `<p>O maior elemento do vetor é ${Math.max.apply(null, arrayValues)}</p>`

    results.innerHTML += `<p>O menor elemento do vetor é ${Math.min.apply(null, arrayValues)}</p>`

    results.innerHTML += `<p>A soma de todos os valores do vetor é ${sum}</p>`
    
    results.innerHTML += `<p>A média de todos os elementos do vetor é ${media.toFixed(2)}</p>`
  } else {
    alert('Pelo menos um valor é necessário!')
  }
}

function clear() {
  selectNumberList.options.length = 0
  arrayValues = []
  results.innerHTML = ''
}