const filme = {
    titulo: 'Mulher Maravilha',
    ano: 2017,
    persongem: 'Diana'
}

function exibirPropriedades(filme) {
    for (const key in filme) {
        if (typeof filme[key] == 'string')
            console.log(key, filme[key])
    }
}

exibirPropriedades(filme)