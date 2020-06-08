function mostrarPrimos(tamanho) {

    for (let n = 2; n <= tamanho; n++) {
        if (verificarNumeroPrimo(n))
            console.log(n)
    }
}

function verificarNumeroPrimo(numero) {

    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0)
            return false
    }
    return true
}

mostrarPrimos(15)