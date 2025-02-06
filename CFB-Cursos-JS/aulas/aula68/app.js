class Carro{
    constructor(tipo,estagioTurbo){
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome='Comum'
        }
        else if(tipo==2){
            this.velMax=160
            this.nome='Esportivo'
        }
        else if(tipo==3){
            this.velMax=200
            this.nome='Super esportivo'
        }
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.turbo.pot)
        console.log('--------------------')
    }
    info2(){
        console.log('=================')
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log('=================')
    }
}
class Turbo{
    constructor(stage){
        if(stage==0){
            this.pot=0
        }
        else if(stage==1){
            this.pot=50
        }
        else if(stage==2){
            this.pot=75
        }
        else if(stage==3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.velMax=350+this.turbo.pot
        // this.velMax=300
        this.nome='Carro especial'
    }
    info(){
        super.info()
    }
}

const carro1=new Carro(1,0)
const carro2=new Carro(1,1)
const carro3=new CarroEspecial(3)

carro1.info()
carro2.info()
carro3.info()

// carro1.info2()
// carro2.info2()