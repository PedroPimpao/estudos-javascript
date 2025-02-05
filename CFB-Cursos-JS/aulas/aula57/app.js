class Pessoa{
    constructor(parametro_nome,parapetro_idade){
        this.nome=parametro_nome
        this.idade=parapetro_idade
    }
}

let pessoa1=new Pessoa('Pedro',19)
let pessoa2=new Pessoa('Raphael',20)
let pessoa3=new Pessoa('Felipe',18)

console.log(pessoa1.nome,pessoa1.idade)
console.log(pessoa2.nome,pessoa2.idade)
console.log(pessoa3.nome,pessoa3.idade)
