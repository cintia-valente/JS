function calculaNotas(notas) {
    
    let soma = 0
    let media = 0

    for (let n = 0; n < notas.length; n++) {
       soma += notas[n]
    }
    media = soma / notas.length

    if (media <= 5.9)
        console.log('F')
    else if (media <= 6.9)
        console.log('D')
    else if (media <= 7.9)
        console.log('C')
    else if (media <= 8.9)
        console.log('B')
    else
        console.log('A')
}
const notas = [10, 8, 10]
calculaNotas(notas)