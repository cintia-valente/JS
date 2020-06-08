const numeros = [1, 2, 3];

//Add no início
numeros.unshift(0)
console.log(numeros)

//Add no meio
numeros.splice(1, 0, 'a') //a vai ser adicionado no índ 1 (entre 1 e 2), e 0= nenhum elem será deletado
console.log(numeros)

//Add no final
numeros.push(5)
console.log(numeros)

const valor = [66, 11, 44]

valor.unshift(1)
console.log(valor)

valor.splice(3, 0, 22)
console.log(valor)

valor.splice(3, 44, 22)
console.log(valor)

valor.push(6)
console.log(valor)