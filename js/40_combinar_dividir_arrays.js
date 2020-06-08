let primeiro = [1, 2, 3]
let segundo = [4, 5, 6]

//Concatenando arrays
let combinado = primeiro.concat(segundo)
console.log(combinado)

//Dividir array
//passa o ind inicial e final e dentro deste intervalo, extrai os valores,
//porém vai até o final - 1, ou seja, não extrai o último elem, 
//no exemplo vai até o ind 2, que é igual ao elem 3
let dividido = combinado.slice(1, 3) 
console.log(dividido)

//Dividir passando apenas um ind
//Neste exemplo, extrai todos os elem, iniciando no ind 1 que contém o 
//elem 2 até o final do tamanho do array, neste caso até o elem 6
let dividido1 = combinado.slice(1)
console.log(dividido1)

//Copiar, clonar todos elem de um array
let copiar = combinado.slice()
console.log(copiar)

//OBS: se estiver trabalhando com objetos, vai trabalhar com a referência,
//ou seja, vai ser alterado em todos os locais em que o array é referenciado