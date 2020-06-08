const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},
];

let marca = marcas.find(function(marca) {
    return marca.nome === 'a'
});

console.log(marca)

const pizzas = [
    {id:1, sabor: 'calabresa'},
    {id:2, sabor: 'bacon'},
];

let pizza = pizzas.find(function(pizza) {
    return pizza.sabor === 'calabresa'
});

console.log(pizza)

