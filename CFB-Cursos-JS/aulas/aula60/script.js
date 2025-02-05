function Pessoa(parametro_nome,parametro_idade){
    this.name=parametro_nome,
    this.years=parametro_idade,

    this.getName=function(){
        return this.name
    },

    this.getYears=function(){
        return this.years
    },

    this.setName=function(input_name){
        this.name=input_name
    },

    this.setYears=function(input_years){
        this.years=input_years
    },

    this.info=function(){
        console.log(`Nome: ${this.name}`)
        console.log(`Idade: ${this.years}`)
        console.log('')
    }
}

let pessoas=[]

const addButton=document.querySelector('#btn_add')
const resField=document.querySelector('.res')
addButton.addEventListener('click',()=>{
    const inputName=document.querySelector('#input-name')
    const inputYears=document.querySelector("#input-years")
    let novaPessoa=new Pessoa(inputName.value,inputYears.value)
    pessoas.push(novaPessoa)
    novaPessoa.info()
    console.log(pessoas)
    resField.innerHTML=`Nome: ${novaPessoa.getName()} <br>`
    resField.innerHTML+=`Idade: ${novaPessoa.getYears()} <br>`
})