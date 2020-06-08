let primeiro = [1, 2, 3]
let segundo = [4, 5, 6]

//Concatenando arrays com Spread
let combinado = [...primeiro, ...segundo]
console.log(combinado)
//Com o spread pode fazer modificações como por exemplo,
//colocar uma string em algum lugar do array
//Exemplo:
//let combinado = [...primeiro, 'a', ...segundo]

//Clonar array
let clonado = [...combinado]
console.log(clonado)
