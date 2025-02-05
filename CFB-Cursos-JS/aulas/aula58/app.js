class Carro{
    constructor(parametro_fabricante,parametro_nome,parapetro_tipo){
        this.manufacturer=parametro_fabricante
        this.name=parametro_nome
        this.type=parapetro_tipo
    }
}

let Carro1=new Carro('Nissan','GTR R35','Esportivo')
let Carro2=new Carro('Honda','HRV','SUV')
let Carro3=new Carro('Mercedes','AMG One','Hypercar')


console.log(`Carro 1: \n Fabricante: ${Carro1.manufacturer}\n Nome: ${Carro1.name}\n Tipo: ${Carro1.type}`)
console.log('')
console.log(`Carro 2: \n Fabricante: ${Carro2.manufacturer}\n Nome: ${Carro2.name}\n Tipo: ${Carro2.type}`)
console.log('')
console.log(`Carro 3: \n Fabricante: ${Carro3.manufacturer}\n Nome: ${Carro3.name}\n Tipo: ${Carro3.type}`)