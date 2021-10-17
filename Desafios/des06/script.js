function converter(){

    let C = Number(prompt('Digite uma temperatura °C (Celsius)'))
    let K = C + 273
    let F = 1.8 * C + 32
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    
    titulo.innerHTML = `A temperatura de ${C}°C, corresponde a:`
    res.innerHTML = `${K}K (Kelvin) <br> ${F}°F (Fahrenheit)`
}