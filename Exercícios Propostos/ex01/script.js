function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#505050'
    }
}