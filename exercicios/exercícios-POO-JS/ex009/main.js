// Crie uma classe chamada “Paciente” que possua atributos para armazenar o nome, a idade e o histórico de consultas de um paciente. Implemente métodos para adicionar uma nova consulta ao histórico e exibir as consultas realizadas.

class Paciente{
    constructor(input_nome,input_idade,input_historico){
        this.nome=input_nome
        this.idade=input_idade
        this.historico_consultas=[input_historico]
    }
    adicionar_consulta(consulta){
        this.historico_consultas.push(consulta)
        console.log('-------------------')
        console.log(`Nova consulta: ${consulta}`)
        console.log(`Histórico atualizado: ${this.historico_consultas}`)
        console.log('-------------------')
    }
    info(){
        console.log('-------------------')
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Histórico de consultas: ${this.historico_consultas}`)
        console.log('-------------------')
    }
}
const historico=[
    'Consulta A',
    'Consulta B',
    'Consulta C',
    'Consulta D',
    'Consulta E',
    'Consulta F',
]

const paciente=new Paciente('Pedro',19,historico)
paciente.adicionar_consulta('Consulta G')
paciente.info()
