const soma=(...valores)=>{
    let total=0
    let tamanho=valores.length
    for(let i=0;i<tamanho;i++){
        total=total + valores[i]
    }
    return total
}
console.log(soma(10,20,30,23,45.4,70))