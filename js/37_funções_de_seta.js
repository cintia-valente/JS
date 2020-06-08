const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},
];

//Com arrow funtions, é possível remover a palavra function,
//remover as chaves e a palavra return
let marca = marcas.find((marca) => marca.nome === 'a')
console.log(marca)
