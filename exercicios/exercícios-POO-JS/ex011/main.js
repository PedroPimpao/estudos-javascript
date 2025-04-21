// Crie uma classe chamada “Pessoa” que possua atributos para armazenar nome, idade e profissão. Implemente métodos para calcular a idade em anos bissextos e exibir informações da pessoa.

class Pessoa{
    constructor(input_nome, input_idade, input_profissao){
        this.nome=input_nome
        this.idade=input_idade
        this.profissao=input_profissao
    }
    getBissextos(){
        console.log(`Idade em anos bissextos: ${this.idade/4}`)
    }
    getIdade(){
        console.log(`Idade: ${this.idade}`)
    }
    getNome(){
        console.log(`Nome: ${this.nome}`)
    }
    getProfissao(){
        console.log(`Profissão: ${this.profissao}`)
    }
    info(){
        this.getNome()
        this.getIdade()
        this.getBissextos()
        this.getProfissao()
    }
}

const pessoa1= new Pessoa(`Pedro`,19,`Programador`)
pessoa1.info()