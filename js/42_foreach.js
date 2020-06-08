let numeros = [1, 2, 3, 4]

numeros.forEach(function(numero){
    console.log(numero)
})

//Pode usar arrow funtions
numeros.forEach((numero) => console.log(numero))

//Imprimindo com o índice
numeros.forEach((indice, numero) => console.log(indice, numero))