function verificaParImpar(tamanho) {
    let soma3 = 0
    let soma5 = 0

    for (let index = 0; index <= tamanho; index++) {
        if (index % 3 == 0)
            soma3 += index
        if (index % 5 == 0) 
            soma5 += index
    }
    console.log(soma3 + soma5)
}

verificaParImpar(10)

