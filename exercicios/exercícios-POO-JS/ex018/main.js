// Implemente uma classe chamada “Biblioteca” que represente uma biblioteca virtual. Essa classe deve permitir cadastrar livros, fazer empréstimos, devolver livros e verificar a disponibilidade de um livro.

class Livro{
    constructor(input_titulo, input_autor){
        this.titulo=input_titulo
        this.autor=input_autor
        this.disponivel=true
        this.id=0
    }
}

class Biblioteca{
    constructor(){
        this.lista_livros=[]
        this.lista_emprestimo=[]
        this.livro_id=0
    }

    cadastrar_livro(titulo, autor){
        const novoLivro = new Livro(titulo, autor)
        this.livro_id++
        novoLivro.id=this.livro_id
        this.lista_livros.push(novoLivro)
        return novoLivro
    }

    remover_livro(id_livro){
        this.lista_livros=this.lista_livros.filter(livro => livro.id !== id_livro)
    }

    buscar_livro(id_livro){
        return this.lista_livros.find(livro => livro.id === id_livro)
    }

    buscar_livro_emprestado(id_livro){
        return this.lista_emprestimo.find(livro => livro.id === id_livro)
    }

    exibir_livro(id_livro){
        const livro=this.buscar_livro(id_livro)
        const { titulo, autor, id } = livro
        console.log("==================")
        console.log(`Título: ${titulo}`)
        console.log(`Autor: ${autor}`)
        console.log(`ID: ${id}`)
        console.log("==================")
    }

    exibir_livro_emprestado(id_livro){
        const livro=this.buscar_livro_emprestado(id_livro)
        const { titulo, autor, id } = livro
        console.log("==================")
        console.log(`Título: ${titulo}`)
        console.log(`Autor: ${autor}`)
        console.log(`ID: ${id}`)
        console.log("==================")
    }

    exibir_lista(){
        console.log("Livros Disponíveis: ")
        console.log("=---------------------------=")
        this.lista_livros.map((livro)=>{
            this.exibir_livro(livro.id)
        })
        console.log("=---------------------------=")
    }

    emprestimo(livro){
        this.remover_livro(livro.id)
        this.lista_emprestimo.push(livro)
        livro.disponivel=false
    }

    devolucao(livroDevolvido){
        this.lista_livros.push(livroDevolvido)
        this.lista_emprestimo=this.lista_emprestimo.filter(livro => livro.id !== livroDevolvido.id)
        livroDevolvido.disponivel=true
    }

    exibirLivrosEmprestados(){
        console.log("Livros em Emprestimo: ")
        console.log("=---------------------------=")
        this.lista_emprestimo.map((livro)=>{
            this.exibir_livro_emprestado(livro.id)
        })
        console.log("=---------------------------=")
    }

    verificarDisponibilidade(livro){
        const status =  livro.disponivel ? "Livro disponível" : "Livro indisponível"
        console.log(status)
    }
}



const biblioteca = new Biblioteca()

const livro1 = biblioteca.cadastrar_livro("How to Build a F1 Car", "Adrian Newey")
const livro2 = biblioteca.cadastrar_livro("Harry Potter", "Joanne Rowling")
const livro3 = biblioteca.cadastrar_livro("Algum Livro Aí", "Alguem por ai")

biblioteca.exibir_lista()
biblioteca.emprestimo(livro2)
biblioteca.exibirLivrosEmprestados()
biblioteca.exibir_lista()
biblioteca.verificarDisponibilidade(livro2)
biblioteca.verificarDisponibilidade(livro3)
biblioteca.devolucao(livro2)
biblioteca.exibir_lista()
biblioteca.exibirLivrosEmprestados()
