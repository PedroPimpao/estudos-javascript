// Crie uma classe chamada “LojaVirtual” que represente uma plataforma de vendas online. Essa classe deve ter funcionalidades para cadastrar produtos, gerar carrinho de compras, aplicar descontos e calcular o valor total da compra.

class Produto{
    constructor(input_nome, input_preco){
        this.nomeProduto=input_nome
        this.preco=input_preco
        this.quantidade=0
    }
    aplicarDesconto(taxaDesconto){
        const desconto=this.preco*(taxaDesconto/100)
        this.preco=(this.preco-desconto).toFixed(2)
    }
    aplicarAcrescimo(taxaAcrescimo){
        const acrescimo=this.preco*(taxaAcrescimo/100)
        this.preco=(this.preco+acrescimo).toFixed(2)
    }
    acrescentar(acrescimo){
        this.quantidade+=acrescimo
    }
    decrescentar(decrescimo){
        this.quantidade-=decrescimo
    }
    verificarDisponibilidade(){
        console.log(`Quantidade: ${this.quantidade}`) 
    }
}

class LojaVirtual{
    constructor(){
        this.listaProdutos=[]
        this.carrinho=[]
    }
    cadastrarProduto(nomeProduto, precoProduto){
        const novoProduto = new Produto(nomeProduto, precoProduto)
        this.listaProdutos.push(novoProduto)
        return novoProduto
    }
    exibirProdutos(){
        if(this.listaProdutos.length > 0){
            console.log('========================')
            this.listaProdutos.map((produto, indice)=>{
                const { nomeProduto, preco, quantidade, id}=produto
                console.log(`----- Produto ${indice+1} -----`)
                console.log(`Nome: ${nomeProduto}`)
                console.log(`Preço: ${preco}`)
                console.log(`Quantidade disponível: ${quantidade}`)
                console.log(`ID: ${indice}`)
            })
            console.log('========================')
        }else{
            console.log("Não há produtos disponíveis")
        }
    }
    adicionarNoCarrinho(nomeProduto){
        this.carrinho.push(nomeProduto)
        nomeProduto.decrescentar(1)
    }
    exibirCarrinho(){
        if(this.carrinho.length > 0){
            console.log('========================')
            this.carrinho.map((produto , indice)=>{
                const { nomeProduto, preco, quantidade, id}=produto
                console.log(`----- Produto no Carrinho ${indice+1} -----`)
                console.log(`Nome: ${nomeProduto}`)
                console.log(`Preço: ${preco}`)
                console.log(`Quantidade disponível: ${quantidade}`)
            })
            console.log('========================')
        }else{
            console.log("Carrinho vazio")
        }
    }
    buscarNoCarrinho(nomeProduto){
        return this.carrinho.find(produto => produto == nomeProduto)
    }
    removerDoCarrinho(nomeProduto){
        if(this.buscarNoCarrinho(nomeProduto)){
            this.carrinho=this.carrinho.filter(produto => produto!=nomeProduto)
            nomeProduto.acrescentar(1)
        }else{
            console.log("Produto não encontrado ou o carrinho está vazio") 
        }
    }
    totalCompra(){
        if(this.carrinho.length > 0){
            let total=0
            this.carrinho.map((produto)=>{
                total+=produto.preco
            })
            console.log(`O total da compra é: ${total}`)
        }else{
            console.log("Carrinho vazio")
        }
    }
}

const loja=new LojaVirtual()
const comida=loja.cadastrarProduto('Comida', 7)
const computador=loja.cadastrarProduto('Computador', 2350)
const celular=loja.cadastrarProduto('Celular', 1700)
const carregador=loja.cadastrarProduto('Carregador Turbo', 350)

comida.acrescentar(16)
computador.acrescentar(7)
celular.acrescentar(12)
carregador.acrescentar(4)
carregador.acrescentar(4)

loja.exibirProdutos()

loja.adicionarNoCarrinho(computador)
loja.adicionarNoCarrinho(carregador)
loja.adicionarNoCarrinho(carregador)
loja.exibirCarrinho()
loja.totalCompra()