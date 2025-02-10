// Crie uma classe chamada “Funcionário” com atributos para armazenar o nome, o salário e o cargo do funcionário. Implemente métodos para calcular o salário líquido, considerando descontos de impostos e benefícios.

class Funcionario{
    constructor(input_nome,input_salario,input_cargo){
        this.nome=input_nome
        this.salario=input_salario
        this.cargo=input_cargo
        this.impostoTaxa=0.05
    }
    calc_liquido(){
        const msg_erro='Dados não encontrados'
        const cargo=this.cargo
        const cargos_beneficiosObj={
            'faxineiro':0/100,
            'auxiliar':10/100,
            'atendente':15/100,
            'gerente':40/100
        }
        let cargoSelecionadoBonus=cargos_beneficiosObj[cargo]
        if(cargoSelecionadoBonus==undefined){
            // console.log(msg_erro)
            return msg_erro
        }else{
            let bonus=this.salario*cargoSelecionadoBonus
            let imposto=this.salario*this.impostoTaxa
            let salario_liquido=this.salario+bonus-imposto
            return salario_liquido
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Salário bruto: ${this.salario}`)
        console.log(`Salário liquido: ${this.calc_liquido()}`)
        console.log('-----------------------')
    }
}
const novoFuncionario= new Funcionario('Pedro'.toUpperCase(),2000,'repositor'.toLowerCase())
novoFuncionario.info()