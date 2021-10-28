let numberValue = document.getElementById('inputAddNumber')

let arrayValues = []

document.getElementById('addNumberButton').addEventListener('click', addNumberToArray)
document.getElementById('finish').addEventListener('click', showResults)

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

function showResults() {
  if (arrayValues.length >= 1) {
    let results = document.getElementById('divResults')

    let length = arrayValues.length

    results.innerHTML = ''

    arrayValues.sort

    let p1 = document.createElement('p')
    p1.innerHTML = `Até agora foram cadastrados ${length} números`
    results.appendChild(p1)

    let p2 = document.createElement('p')
    p2.innerHTML = `O maior elemento do vetor é ${Math.max.apply(null, arrayValues)}`
    results.appendChild(p2)

    let p3 = document.createElement('p')
    p3.innerHTML = `O menor elemento do vetor é ${Math.min.apply(null, arrayValues)}`
    results.appendChild(p3)

    let p4 = document.createElement('p')
    let sum = arrayValues.reduce(function (sum, i) { //método reduce para somar todos os valores do array
      return sum + i
    })
    p4.innerHTML = `A soma de todos os valores do vetor é ${sum}`
    results.appendChild(p4)

    let p5 = document.createElement('p')
    let media = sum / arrayValues.length
    p5.innerHTML = `A média de todos os elementos do vetor é ${media.toFixed(2)}`
    results.appendChild(p5)
  } else {
    alert('Pelo menos um valor é necessário!')
  }
}