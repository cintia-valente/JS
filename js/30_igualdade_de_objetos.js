function endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new endereco ('a', 'b', 'c');
const endereco2 = new endereco ('a', 'b', 'c');

function saoIguais(endereco1, endereco2) {
    if (endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade && 
        endereco1.cep === endereco2.cep) {
            return true
    }
}

function temEnderecoMemIguais(endereco1, endereco2) {
    return endereco1 === endereco2
}

resultado = saoIguais(endereco1, endereco2)
console.log(resultado)

memoria = temEnderecoMemIguais(endereco1, endereco2)
console.log(memoria)
