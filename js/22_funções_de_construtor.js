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

//Pascal Case 
function Celular(marca, tela, bateria){
    this.marcaCelular = marca,
    this.tamanhoTela = tela,
    this.capacidadeBateria = bateria,
    this.ligar = function() {
        console.log('Fazendo ligação...')
    }
}

const celular = new Celular('LG', 5.5, 5000)
console.log(celular)