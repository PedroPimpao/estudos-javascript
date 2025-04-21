// Crie uma classe chamada “MáquinaDeVendas” que simule uma máquina de venda de produtos. Essa classe deve permitir cadastrar produtos, selecionar um produto para compra, inserir dinheiro, retornar o troco e exibir o estoque disponível.

class Produto{
    constructor(input_nome, input_preco, input_quantidade){
        this.nome=input_nome
        this.preco=input_preco
        this.quantidade=input_quantidade
    }

    acrescentar(quantidade){
        this.quantidade+=quantidade
    }

    decrescentar(quantidade){
        if(this.quantidade > 0){
            this.quantidade-=quantidade
        }else{
            console.log("Não há produtos para remover")
        }
    }
}

class MaquinaDeVendas{
    constructor(){
        this.lista_produtos=[]
    }

    mensagemListaVazia(){
        console.log(`Lista de Produtos vazia!`)
    }

    cadastrarProduto(nome, preco, quantidade){
        const novoProduto = new Produto(nome, preco, quantidade)
        this.lista_produtos.push(novoProduto)
        console.log("--- Novo Produto Cadastrado ---")
        this.exibirProduto(novoProduto)
        return novoProduto
    }

    removerProduto(produtoRemovido){
        if(this.lista_produtos.length > 0){
            this.lista_produtos=this.lista_produtos.filter((produto)=>{
                return produto!==produtoRemovido
            })
            console.log("--- Produto Removido: ---")
            this.exibirProduto(produtoRemovido)
        }else{
            this.mensagemListaVazia()
        }
    }

    exibirProduto(produto){
        const {nome, preco, quantidade}=produto
        console.log("==============")
        console.log(`Nome: ${nome}`)
        console.log(`Preço: R$${preco}`)
        console.log(`Quantidade disponível: ${quantidade}`)
        console.log("==============")
    }

    exibirLista(){
        if(this.lista_produtos.length > 0){
            this.lista_produtos.map((produto, indice)=>{
                console.log(`- - - Produto ${indice+1} - - -`)
                this.exibirProduto(produto)
            })
        }else{
            this.mensagemListaVazia()
        }
    }

    comprar(produto, dinheiro){
        const { preco, quantidade }=produto
        if(dinheiro >= preco && quantidade > 0){
            let troco=dinheiro-preco
            dinheiro-=preco
            produto.quantidade--
            console.log(`Compra realizada!`)
            this.exibirProduto(produto)
            if(troco > 0){
                console.log(`Troco: R$${troco.toFixed(2)}`)
            }
        }else{
            console.log("Compra cancelada!")
        }
    }
}

const maquina=new MaquinaDeVendas()

const produto1=maquina.cadastrarProduto('Biscoito', 6, 15)
const produto2=maquina.cadastrarProduto('Chocolate' ,4, 4)
maquina.exibirLista()
maquina.comprar(produto1,56)
maquina.removerProduto(produto2)
maquina.exibirLista()