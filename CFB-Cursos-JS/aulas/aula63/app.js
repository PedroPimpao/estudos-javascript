class Veiculo{
    constructor(input_nome,input_portas){
        this.nome=input_nome
        this.porta=input_portas
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Portas: ${this.porta}`)
    }
    getName(){
        return this.nome
    }
    getDoors(){
        return this.porta
    }
}

class Militar extends Veiculo{
    constructor(input_nome,input_portas,input_blindagem,input_municao){
        super(input_nome,input_portas)
        this.blindagem=input_blindagem
        this.municao=input_municao
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Portas: ${this.porta}`)
        console.log(`Blindagem: ${this.blindagem}`)
        console.log(`Munição: ${this.municao}`)
    }
    getShield(){
        return this.blindagem
    }
    getAmmo(){
        return this.municao
    }
}

// Valores de entrada dos campos text
const inputName=document.querySelector('#input-name')
const inputDoors=document.querySelector('#input-doors')
const inputShield=document.querySelector('#input-shield')
const inputAmmo=document.querySelector('#input-ammo')

// Radios
const militarType=document.querySelector('#militar-type')
const normalType=document.querySelector('#normal-type')
const radios=document.querySelectorAll('.radio-input')

// Botão paa adicionar (Finalizar/ Submmit)
const addButton=document.querySelector('#btn-addCar')

// Elemento resultado
const carsField=document.querySelector('.carros')

let veiculos=['Jetta']

// Verificação de Radio selecionado
const selectType=()=>{
    addButton.removeEventListener('click',createMilitarVeichle)
    addButton.removeEventListener('click',createNormalVeichle)

    if(militarType.checked){
        console.log('Tipo militar selecionado')
        inputShield.disabled=false
        inputAmmo.disabled=false
        addButton.addEventListener('click',createMilitarVeichle)
    }
    if(normalType.checked){
        console.log('Tipo normal selecionado')
        inputShield.disabled=true
        inputAmmo.disabled=true

        inputShield.value=0
        inputAmmo.value=0
        addButton.addEventListener('click',createNormalVeichle)
    }
}
radios.forEach((radio)=>{
    radio.addEventListener('change',selectType)
})


const createMilitarVeichle=()=>{
    const newVeichle=new Militar(inputName.value,inputDoors.value,inputShield.value,inputAmmo.value)
    console.log(`Nome: ${newVeichle.getName()}`)
    console.log(`Portas: ${newVeichle.getDoors()}`)
    console.log(`Blindagem: ${newVeichle.getShield()}`)
    console.log(`Munição: ${newVeichle.getAmmo()}`)
    veiculos.push(newVeichle)
    console.log(veiculos)
    console.log('')
}

const createNormalVeichle=()=>{
    const newVeichle=new Veiculo(inputName.value,inputDoors.value)
    console.log(`Nome: ${newVeichle.getName()}`)
    console.log(`Portas: ${newVeichle.getDoors()}`)
    veiculos.push(newVeichle)
    console.log(veiculos)
    console.log('')
}
veiculos.forEach((veiculo)=>{
    const showCarsElement=document.querySelector('.carros')
    const elementoCarro=document.createElement('div')
    elementoCarro.classList.add('carro')
    elementoCarro.innerHTML=`Novo veículo`
    elementoCarro.innerHTML=`Nome: ${veiculo.getName()}`
    elementoCarro.innerHTML+=`Portas: ${veiculo.getDoors()}`
    elementoCarro.innerHTML+=`Blindagem: ${veiculo.getShield()}`
    elementoCarro.innerHTML+=`Munição: ${veiculo.getAmmo()}`
    showCarsElement.appendChild(elementoCarro)
})





