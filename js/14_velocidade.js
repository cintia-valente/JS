function medirVelocidade(velocidade) {
    const velMax = 70
    const kmPonto = 5
    const ptoMax = 12

    if (velocidade <= velMax)
        return console.log('OK') 

    else{
        const pontos = Math.floor((velocidade - velMax) / kmPonto);
    
        if (pontos >= ptoMax)
            console.log('Carteira Suspensa!!!');
        else 
            return console.log('Pontos:', pontos);
    }
}    

medirVelocidade(130);
