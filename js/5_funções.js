/*Nome de função = Verbo + Substantivo
    Exemplos:

    resetaCor
    tranformarObjeto
*/
let corSite = "azul";
console.log(corSite);

function resetaCor(cor, tom){
    corsite = cor + tom;
    return corsite;
};

let res = resetaCor("rosa", " claro");
console.log(res);