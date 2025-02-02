const arrayIdades=[14,15,17,10,19,33,2]

const identificar=arrayIdades.filter((idade,idx)=>{
    return idade<18
})

const maioridade=arrayIdades.filter((item,index)=>{
    if(item<18){
        console.log(`Menoridade: ${item} Posição: ${index}`)
    }
    return item>=18
})
console.log(maioridade)

const maioridadeFunction=()=>{
    const maior=arrayIdades.filter((item,index)=>{
        if(item>18){
            console.log(`Maioridade: ${item} Posição: ${index}`)
        }
        return item>18
    })
    return maior
}
console.log(maioridadeFunction())