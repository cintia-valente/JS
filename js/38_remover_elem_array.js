let numeros = [1, 2, 3, 4, 5, 6]

//Remover do final:
let ultimo = numeros.pop()
console.log(ultimo)
console.log(numeros)

//Remover do início:
let primeiro = numeros.shift()
console.log(primeiro)
console.log(numeros)

//Remover do meio:
//Pega um valor inicial e remove a partir dele.
//No exemplo, remove o elem 4 que é elem a partir do índ 2 
//e o parâmetro 1 indica que vai ser removido apenas 1 elem, ou seja apenas o 4:
let meio = numeros.splice(2, 1)
console.log(meio)
console.log(numeros)