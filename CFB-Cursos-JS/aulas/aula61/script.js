const pessoa={
    nome: 'Pedro',
    getName:function(){
        return this.nome
    },
    setName:function(input_name){
        this.nome=input_name
    }
}

console.log(pessoa.getName())

const p3=pessoa
p3["nome"]='Gabriel Barbosa'
console.log(p3.getName())

pessoa.setName('Pedro Guilherme')
console.log(pessoa.getName())