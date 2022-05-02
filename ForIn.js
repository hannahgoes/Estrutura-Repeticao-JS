// Variável carro do tipo objeto que possui a propriedade de "marca", "modelo" e " "cor"
let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}

    for(propriedade in carro){
        console.log(propriedade);
}
//Resultado "marca", "modelo" e "cor"