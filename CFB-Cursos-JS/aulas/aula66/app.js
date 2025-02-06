class Npc{
    static alerta=false
    constructor(energia){
        this.energia=energia
    }
    info(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Estado: ${(Npc.alerta? 'Em alerta':'Tranquilo')}`)
        console.log('---------------------------------------------------')
    }
    static alertar(){
        Npc.alerta=true
    }
    descansar(){
        this.alerta=false
    }
}

const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()





