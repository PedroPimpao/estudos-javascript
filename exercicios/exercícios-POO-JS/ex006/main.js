// Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em estoque e verificar se o produto está disponível.

class Produto{
    constructor(input_nome,input_preco,input_quantidade){
        this.nome=input_nome
        this.preco=input_preco
        this.quantidade=input_quantidade
        // this.disponivel?'Disponivel':'Indisponível'
    }
    valor_estoque(){
        let valor_total=this.preco*this.quantidade
        return valor_total
    }
    disponibilidade(){
        if(this.quantidade>0){
            return 'Produto disponível'
        }else{
            return 'Produto indisponível'
        }
    }
    info(){
        const preco=this.preco
        console.log(`Nome produto: ${this.nome}`)
        console.log(`Preço: ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
        console.log(`Disponibilidade: ${this.disponibilidade()}`)
        console.log(`Valor em estoque: ${this.valor_estoque().toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
        console.log('----------------------')
    }
}
const novoProduto=new Produto('Guaraná',15,500)
novoProduto.info()