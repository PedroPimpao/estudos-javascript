// Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques.

class ContaBancaria{
    constructor(input_id,input_titular,input_saldo){
        this.id_conta=input_id
        this.nome_titular=input_titular
        this.saldo=input_saldo
    }
    deposito(input_deposito){
        this.valor_deposito=input_deposito
        this.saldo+=this.valor_deposito
        
        const mensagem_sucesso=`Depósito realizado: ${this.valor_deposito}`
        const mensagem_novo_saldo=`Saldo pós depósito: ${this.saldo}`
        console.log('-----------------')
        console.log(mensagem_sucesso)
        console.log(mensagem_novo_saldo)
        console.log('-----------------')
    }
    saque(input_saque){
        this.valor_saque=input_saque
        const mensagem_erro='Saldo insuficiente'
        const mensagem_sucesso=`Saque realizado: ${this.valor_saque}`
        const mensagem_novo_saldo=`Saldo pós saque: ${this.saldo}`
        if(this.valor_saque>this.saldo){
            console.error(mensagem_erro)
        }else{
            this.saldo-=this.valor_saque
            console.log('-----------------')
            console.log(mensagem_sucesso)
            console.log(mensagem_novo_saldo)
            console.log('-----------------')
        }
    }
    info(){
        console.log('-----------------')
        console.log(`Número da conta: ${this.id_conta}`)
        console.log(`Nome do titular: ${this.nome_titular}`)
        console.log(`Saldo disponível: ${this.saldo}`)
        console.log('-----------------')
    }
}

const novaConta= new ContaBancaria(1,'Pedro',30000)

novaConta.info()
novaConta.saque(5000)
novaConta.info()
