const endereco = {
    rua: 'Anita Garibaldi, 123',
    cidade: 'Porto Alegre',
    cep: '2345678-90',
}

function exibirEndereco(endereco) {
    for (const key in endereco) {
        console.log(key, endereco[key])
    }
}

exibirEndereco(endereco) 