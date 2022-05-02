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

//Pega um indice dentro do objeto "usuario" dentro de um array de objetos
for (const usuario of usuarios.entries()){
    console.log(usuario)
}
