// Classe PAI
class Carro{
    constructor(input_name,input_doors){
        this.nome=input_name
        this.portas=input_doors
        this.ligado=false
        this.velocidade=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setColor=function(input_color){
        this.cor=input_color
    }
}

console.log('Carro 1')
const carro1=new Carro('Honda Civic',2)
carro1.ligar()
carro1.desligar()
carro1.setColor('Vermelho')

console.log(`Nome: ${carro1.nome}`)
console.log(`Portas: ${carro1.portas}`)
console.log(`Estado: ${(carro1.ligado?'Ligado':'Desligado')}`)
console.log(`Velocidade: ${carro1.velocidade}`)
console.log(`Cor: ${carro1.cor}`)


// Classe filho 
class Militar extends Carro{
    constructor(input_name,input_doors,input_blindagem,input_municao){
        super(input_name,input_doors)
        this.blindagem=input_blindagem
        this.municao=input_municao
    }
}

console.log('')
console.log('Carro 2')
const carro2=new Militar('Hammer',4,3500,100000)
carro2.setColor('Camuflado')
carro2.ligar()

console.log(`Nome: ${carro2.nome}`)
console.log(`Portas: ${carro2.portas}`)
console.log(`Estado: ${(carro2.ligado?'Ligado':'Desligado')}`)
console.log(`Velocidade: ${carro2.velocidade}`)
console.log(`Cor: ${carro2.cor}`)
console.log(`Blindagem: ${carro2.blindagem}`)
console.log(`Munição: ${carro2.municao}`)