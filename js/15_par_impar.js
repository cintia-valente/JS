function verificaParImpar(tamanho) {

    for (let index = 0; index <= tamanho; index++) {
        if (index % 2 == 0)
            console.log(index, 'PAR')
        else 
            console.log(index, 'IMPAR')
    }
}

verificaParImpar(10)


