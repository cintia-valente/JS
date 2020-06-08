const numeros = [1, 2, 3, 4]

//Adcionar um caracter entre cada elem do array, por exemplo '.'
//Vai retornar 1.2.3.4
const combinado = numeros.join('.')
console.log(combinado)

//Separar baseado em algo
//Neste exemplo, vamos separar uma frase por palavra,
//A cada espaço foi feita uma separação baseada em palavras
const frase = 'Olá bem vindo!'
const resultado = frase.split(' ')
console.log(resultado)
//Vai retornar [ 'Olá', 'bem', 'vindo' ]

//Neste exemplo é possível ter um SLUG (traços que são 
//necessários em uma URL)
console.log(resultado.join('-'))