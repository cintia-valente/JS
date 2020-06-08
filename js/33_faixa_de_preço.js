//Função de fábrica
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa = [
    criarFaixaPreco('até R$700', 0, 1500),
    criarFaixaPreco('de R$700 a R$1000', 700, 1000),
    criarFaixaPreco('R$1000 ou mais', 1000, 99999999)
];

console.log(faixa)

/*
//Função de construtor
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa2 = [
    FaixaPreco('até R$600', 0, 1400),
    FaixaPreco('de R$600 a R$1000', 700, 1500),
    FaixaPreco('R$1500 ou mais', 800, 99999999)
];
*/


