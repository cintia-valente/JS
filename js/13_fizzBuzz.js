//Divisível por 3 retorna Fizz
//Divisível por 5 retorna Buzz
//Divisível por 3 e 5 retorna FizzBuzz
//Não divisível por 3 ou 5 retorna entrada
//Se entrada não é número, retorna uma mensagem

function fizzBuzz(valor) {
    if (typeof valor != 'number')
        return ('Não é um número!!!')
    else if (valor % 3 === 0 && valor % 5 === 0) 
        return console.log('FizzBuzz')
    else if (valor % 3 == 0)
        return console.log('Fizz')
    else if (valor % 5 == 0)
        return console.log('Buzz')
    else 
        return console.log(valor)   
}

const resultado = fizzBuzz('ferg')
console.log(resultado)