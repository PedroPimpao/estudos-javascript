// Implemente uma classe chamada “Banco” que represente uma instituição financeira. Essa classe deve conter métodos para cadastrar clientes, abrir contas bancárias e realizar operações como saques, depósitos e transferências.
class Banco{
    constructor(nome_banco){
        this.nomeBanco=nome_banco
        this.listaClientes=[]
    }
    abrirContaBancaria(nomeCliente, saldoInicial=0){
        const novaConta=new contaBancaria(nomeCliente, saldoInicial)
        this.listaClientes.push(novaConta)
        console.log(`Conta aberta no nome de ${nomeCliente} com saldo inicial de ${saldoInicial}`)
        return novaConta
    }
    buscarConta(nomeCliente){
        return this.listaClientes.find(cliente=>cliente.getNome()===nomeCliente)
    }
    exibirListaClientes(){
        if(this.listaClientes.length > 0){
            this.listaClientes.map((cliente, indice)=>{
                console.log(`-----Cliente ${indice+1}-----`)
                console.log(cliente)
            })
        }else{
            console.log("Não há clientes cadastrados")
        }
    }

}

class contaBancaria{
    constructor(input_nome, input_saldo=0){
        this.nome = input_nome
        this.saldo = input_saldo
    }
    getNome(){
        return this.nome
    }
    getSaldo(){
        return this.saldo
    }
    depositar(valor){
        if(valor > 0){
            this.saldo+=valor
            console.log(`Depósito de R$${valor} realizado com sucesso`)
        }
        console.log("Valor de depósito inválido")
    }
    sacar(valor){
        if(valor > 0 && valor <=this.saldo){
            this.saldo-=valor
            console.log(`Saque de R$${valor} realizado com sucesso`)
        }
        console.log("Valor de saque inválido ou saldo insuficiente!)")
    }
    transferir(destino, valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo-=valor
            destino.depositar(valor)
            console.log(`Transferencia de R$${valor} para ${destino.getNome()} realizada com sucesso!`)
        }
        console.log("Transferência não realizada. Verifique o saldo e o valor");
    }
}

const banco = new Banco("Banco do Brasil")
banco.exibirListaClientes()
banco.abrirContaBancaria("Pedro",1500)
banco.abrirContaBancaria("Viviane", 6700)
banco.exibirListaClientes()
banco.buscarConta("Pedro")