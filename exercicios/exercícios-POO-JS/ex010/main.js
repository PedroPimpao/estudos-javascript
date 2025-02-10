// Implemente uma classe chamada “Livro” com atributos para armazenar o título, o autor e o número de páginas do livro. Adicione métodos para emprestar o livro, devolvê-lo e verificar se está disponível.

class Livro{
    constructor(input_titulo,input_autor,input_numero_paginas){
        this.titulo=input_titulo
        this.autor=input_autor
        this.paginas=input_numero_paginas
        this.quantidade=1
        this.disponivel=true
    }
    emprestar(){
        if(this.disponivel){
            this.disponivel=false
            console.log(`Você adquiriu o livro por emprestimo `)
            return this.quantidade-1
        }else{
            console.log(`O livro está indisponível`)
        }

    }
    devolver(){
        if(!this.disponivel){
            this.disponivel=true
            console.log(`Livro devolvido com sucesso`)
            return this.quantidade+1
        }else{
            console.log(`Você não possui o livro para devolve-lo`)
        }
    }
    verificar_disponibilidade(){
        console.log(`Disponibilidade: ${(this.disponivel?'Disponível':'Indisponível')}`)
    }
    info(){
        console.log('-----------------')
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Número de páginas: ${this.paginas}`)
        this.verificar_disponibilidade()
        console.log('-----------------')
    }
}
const novoLivro=new Livro('How to Build a Car','Adrian Newey',400)

novoLivro.info()
novoLivro.devolver()
novoLivro.info()
novoLivro.emprestar()
novoLivro.info()
novoLivro.emprestar()
novoLivro.devolver()
novoLivro.info()
