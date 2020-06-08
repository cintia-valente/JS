function imprimirMensagem(){
    let hora = 19

    if (hora >= 6 && hora <= 12) {
        return console.log('Bom dia!')
    }
    else if (hora <= 18){
        return console.log('Boa tarde!')
    }
    else 
        return console.log('Boa noite!')
} 

resultado = imprimirMensagem()
console.log(resultado)