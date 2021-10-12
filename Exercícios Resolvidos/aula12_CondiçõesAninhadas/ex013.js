var agora = new Date() /* new Date = comando para pegar as informações do relógio do sistema  */
var hora = agora.getHours() /* comando para definir para a variável 'hora' as horas do sistema */
console.log(`Agora são ${hora} horas`)
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else if (hora <= 23) {
    console.log('Boa Noite!')
}