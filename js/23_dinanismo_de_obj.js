const mouse = {
    cor: 'pink',
    marcar: 'dazz'
}

mouse.trocarDP = function() {
    console.log('mudando DPI')
}
mouse.velocidade = 500
console.log(mouse)

delete mouse.trocarDP
console.log(mouse)