// Implemente uma classe chamada “Agenda” que represente uma agenda telefônica. Essa classe deve permitir adicionar, editar e remover contatos, além de buscar por contatos a partir de um nome ou número de telefone.

class Contato{
    constructor(input_nome, input_numero){
        this.nome=input_nome
        this.numero=input_numero
    }
    editarNome(novoNomeInput){
        this.nome=novoNomeInput
    }
    editarNumero(novoNumeroInput){
        this.numero=novoNumeroInput
    }
}

class Agenda{
    constructor(){
        this.lista_contatos=[]
    }
    adicionarContato(nome, numero){
        const novoContato = new Contato(nome,numero)
        this.lista_contatos.push(novoContato)
        // console.log('===================')
        console.log("Contato adicionado: ")
        this.exibirContato(novoContato)
        // console.log('===================')
        return novoContato
    }
    removerContato(nome='',numero=0){
        if(this.lista_contatos.length > 0){
            this.lista_contatos=this.lista_contatos.filter((contato)=>{
                return contato.nome!==nome && contato.numero!==numero
            })
        }else{
            console.log("Lista de contatos vazia!")
        }
    }
    buscarContato(nome='', numero=0){
        if(this.lista_contatos.length > 0){
            const resultado = this.lista_contatos.filter((contato)=>{
                return contato.nome==nome || contato.numero==numero
            })
            
            if(resultado.length === 0){
                console.log("Contato não encontrado!")
            }
            
            return resultado
        }else{
            console.log("Lista de contatos vazia!")
        }
    }
    exibirContato(contato){
        const {nome, numero}=contato
        console.log('===================')
        console.log(`Nome: ${nome}`)
        console.log(`Número: ${numero}`)
        console.log('===================')
    }
    exibirListaContatos(){
        if(this.lista_contatos.length > 0){
            this.lista_contatos.map((contato)=>{
                this.exibirContato(contato)
            })
        }else{
            console.log("Lista de contatos vazia!")
        }
    }
}

const agenda=new Agenda()
agenda.exibirListaContatos()
const cont1=agenda.adicionarContato('Contato 1',123)
const cont2=agenda.adicionarContato('Contato 2',456)
const cont3=agenda.adicionarContato('Contato 3',789)
// agenda.removerContato('',456)
cont1.editarNome('Pimpao Dev')
cont2.editarNumero(55555)
agenda.exibirListaContatos()