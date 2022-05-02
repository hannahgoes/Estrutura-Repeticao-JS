let usuarios = [
    {
        nome: "Hannah",
        sobrenome: "Góes",
        idade: "24",
        email: "hannahgoes@hotmail.com"
    },
    {
        nome: "Cassiano",
        sobrenome: "Peres",
        idade: "32",
        email: "cassiano@transformatec.com"
    },
    {
        nome: "Arthur",
        sobrenome: "Da Dio",
        idade: "22",
        email: "arthur@transformatec.com"
    }
];

//Pega um objeto "usuario" dentro de um array de objetos
for (const usuario of usuarios){

    //Pega uma propriedade contida dentro do objeto chamado usuário
    for (const propriedade in usuario){

        console.log(usuario[propriedade])
    }
}
