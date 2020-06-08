function exibirAsteriscos(linhas) {
    
    let asterisco = '';
    for (let l = 1; l < linhas; l++){
        asterisco += '*'
        console.log(asterisco)
    }
}

exibirAsteriscos(10)