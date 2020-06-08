let cores = []
function trocarValores(cor1, cor2){
    cores[0] = cor2
    cores[1] = cor1

    return cores
}
  
coresTrocadas = trocarValores('rosa', 'azul')
console.log(coresTrocadas)

/* Outras soluções:

let cor1 = 'rosa'
let cor2 = 'azul'
console.log(cor1, cor2)

nova_cor = cor1
cor1 = cor2
cor2 = nova_cor
console.log(cor1, nova_cor2)
*/


