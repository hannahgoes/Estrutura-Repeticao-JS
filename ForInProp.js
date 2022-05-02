let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}

// for(propriedade in carro){
//     console.log(carro[propriedade]);
// }
//ford fiesta prata

for(propriedade in carro){
    console.log(propriedade +": "+carro[propriedade]);
}