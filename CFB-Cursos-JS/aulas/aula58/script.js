class Carro{
    constructor(parametro_nome,parapetro_tipo){
        this.name=parametro_nome
        if(parapetro_tipo==1){
            this.type='Esportivo'
            this.vel_max=310
        }
        else if(parapetro_tipo==2){
            this.type='Utilitário'
            this.vel_max=150
        }
        else if(parapetro_tipo==3){
            this.type='Off Road'
            this.vel_max=120
        }
        else{
            this.type='Militar'
            this.vel_max=110
        }
    }
    getName(){
        return this.name
    }
    getType(){
        return this.type
    }
    getVelMax(){
        return this.vel_max
    }
    getInfo(){
        return [this.name,this.type,this.vel_max]
    }

    setNome(name){
        this.name=name
    }
    info(){
        console.log(`Nome: ${this.name}`)
        console.log(`Tipo: ${this.type}`)
        console.log(`Velocidade Máxima: ${this.vel_max}`)
        console.log('')
    }
}
let carro1=new Carro('Nissan GTR',1)
let carro2=new Carro('Escalade',2)
let carro3=new Carro('RAM 2500',3)
let carro4=new Carro('Hammer',4)

carro1.setNome('Lexus LFA')
// console.log(carro1.getName())
carro1.info()
