//Informa a data atual 
const data1 = new Date()
console.log(data1)

//Definir uma data
const data2 = new Date('08 28 1990 13:30')
console.log(data2)

//Outra maneira de definir data
const data3 = new Date(2020, 02, 06, 9, 30)//02 = março pq começa em 0
console.log(data3)

//Alterar o ano
data3.setFullYear(2030)
console.log(data3)