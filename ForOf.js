// let carros = ['fiesta', 'onix', 'fusca', 'saveiro'];

// for (let carro of carros){
//     console.log(carro);
// }

// fiesta, onix, fusca, saveiro

let revendaDeCarros = [ {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
},
 {
    marca: 'chevrolet',
    modelo: 'Onix',
    cor: 'prata',
}, {
    marca: 'fiat',
    modelo: 'marea bomba',
    cor: 'prata',
}];

//Obtém todos os objetos dentro do array carrosObj
for (let carro of revendaDeCarros){
   
    //obtém uma propriedade específica
    console.log(carro.cor);

    //obtém todas as propriedades do objeto carro
    for(propriedade in carro){
        console.log(propriedade +": "+carro[propriedade]);
    }
}

// fiesta, onix, fusca, saveiro