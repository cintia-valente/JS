let numeros = [1, 2, 3, 4, 5, 6]
let outros = numeros
//Solução 1
//numeros = []
//console.log(numeros)

/*Porém se tiver outro array q recebe o array numeros
Ex: 
let numeros = [1, 2, 3, 4, 5, 6]
let outros = numeros
console.log(numeros)
console.log(outros)
A referência q está dentro do array outros, não será apagado
*/

//Solução 2: apaga TODAS as referências, esta é a solução mais recomendada 
numeros.length = 0
console.log(numeros)
console.log(outros)

//Solução 3
numeros.splice(0, numeros.length) // a partir do ind 0 remove todo o array
console.log(numeros)
console.log(outros)

//Solução 4: é recomendável para array com poucos elem
while (numeros.length > 0)
    numeros.pop()
console.log(numeros)