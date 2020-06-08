/* const celular = {
        marcaCelular: 'SAMSUNG',
        tamanhoTela: {
            vertical: 155,
            horizontal: 75
        },
        capacidadeBateria: 5000,
        ligar: function () {
            console.log('Fazendo ligação...')
        }
}
*/

//camelCase
function criarCelular(marca, tela, bateria) {
    return {
        marcaCelular: marca,
        tamanhoTela: tela,
        capacidadeBateria: bateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

const celular1 = criarCelular('SAMSUNG', 5.5, 5000)
console.log(celular1)