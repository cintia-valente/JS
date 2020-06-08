//Ideal para trabalhar com objetos
const pessoa = {
    nome: 'Cíntia',
    idade: 29
};

for (const key in pessoa) {
    console.log(pessoa)
    console.log(pessoa[key])
}

const cores = ['rosa', 'azul']

for (const indice in cores) {
    console.log(cores[indice])
}