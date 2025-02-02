const cursos=['HTML','CSS','JavaScript','NodeJs','PostgreSQL','MySQL']
const valorProcurado='MySQL'

// Usando forEach

console.log('Por FOREACH:')
const procurarValor=cursos.forEach((item,index)=>{
    const errorMessage='Não foi possível encontrar o item desejado'
    const sucessMessage=`Valor encontrado: ${item}. Indice: ${index}`

    const filteredArray=cursos.filter((item)=>{
        return item!=valorProcurado
    })
    if(item==valorProcurado){
        console.log(cursos)
        console.log(sucessMessage) 
        console.log(filteredArray)
    }
})



