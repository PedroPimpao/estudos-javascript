// Implemente uma classe chamada “Carro” com atributos para armazenar a marca, o modelo e a velocidade atual do carro. Adicione métodos para acelerar, frear e exibir a velocidade atual.
class Carro{
    constructor(input_marca,input_modelo,input_velocidade){
        this.marca=input_marca
        this.modelo=input_modelo
        this.velocidade=input_velocidade 
        this.ligado=false
        this.msg_status='O carro está desligado'
    }
    ligar(){
        console.log('Carro ligado')
        return this.ligado=true
    }
    desligar(){
        console.log('Carro desligado')
        return this.ligado=false
    }
    acelerar(){
        if(this.ligado){
            this.velocidade=this.velocidade+30
            console.log(`[ACELERAR] Velocidade atual: ${this.velocidade}`) 
        }else{
            console.log(this.msg_status)
        }
    }
    freiar(){
        if(this.velocidade==0){
            console.log('O carro está parado')
        }else{
            this.velocidade=this.velocidade-30
            console.log(`[FREIAR] Velocidade atual: ${this.velocidade}`) 
        }
    }
    parar(){
        while(this.velocidade>0){
            this.velocidade=this.velocidade-30
            console.log(`[PARAR] Velocidade atual: ${this.velocidade}`)
            if(this.velocidade<=0){
                this.velocidade=0
            }
        }
        console.log(`Velocidade: ${this.velocidade}`)
    }
    info(){
        console.log('----------------')
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Status: ${(this.ligado?'Ligado':'Desligado')}`)
        console.log(`Velocidade: ${this.velocidade}`)
        console.log('----------------')
    }

}
const novoCarro=new Carro('Nissan','Skyline',0)

novoCarro.info()

novoCarro.acelerar()
novoCarro.ligar()
novoCarro.acelerar()
novoCarro.acelerar()
novoCarro.acelerar()
novoCarro.acelerar()

novoCarro.info()

novoCarro.freiar()
novoCarro.parar()
novoCarro.desligar()
novoCarro.acelerar()

novoCarro.info()



