const pessoa={
    nome:'',
    idade:0,
    setName:function(input_name){
        this.nome=input_name
    },
    setYears:function(input_years){
        this.idade=input_years
    },

    getName:function(){
        return this.nome
    },
    getYears:function(){
        return this.idade
    }
}

const resField=document.querySelector('.res')
const addButton=document.querySelector('#btn_add')


addButton.addEventListener('click',()=>{
    const inputName=document.querySelector('#input-name').value
    const inputYears=document.querySelector('#input-years').value
    pessoa.setName(inputName),
    pessoa.setYears(inputYears)
    console.log(pessoa)
    let colectedName=pessoa.getName()
    let colectedYears=pessoa.getYears()
    console.log(colectedName)
    console.log(colectedYears)

    resField.innerHTML=`Nome: ${colectedName} <br> Idade: ${colectedYears}`
})