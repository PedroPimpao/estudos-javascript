// Campos
const getValues=()=>{
    const primeiro_valor=parseFloat(document.querySelector('#valor1').value)
    const segundo_valor=parseFloat(document.querySelector('#valor2').value)
    return [primeiro_valor,segundo_valor]
}
const resultField=document.querySelector('.result-value')

// Operações
const opSoma=document.querySelector('#soma')
const opSubtr=document.querySelector('#subtracao')
const opMulti=document.querySelector('#multiplicacao')
const opDivisao=document.querySelector('#divisao')



const operacoes=[
    (values)=>{
        let soma=0
        soma=values[0]+values[1]
        return soma
    },
    (values)=>{
        let subtracao=0
        subtracao=values[0]-values[1]
        return subtracao
    },
    (values)=>{
        let multiplicação=1
        multiplicação=values[0]*values[1]
        return multiplicação
    },
    (values)=>{
        let divisao=0
        if(values[1]===0){
            return 'Erro: Divisão por zero'
        }
        divisao=values[0]/values[1]
        return divisao
    }
]

opSoma.addEventListener('click',()=>{
    const valores=getValues()
    const resultado=operacoes[0](valores)
    resultField.innerHTML=resultado
})

opSubtr.addEventListener('click',()=>{
    const valores=getValues()
    const resultado=operacoes[1](valores)
    resultField.innerHTML=resultado
})

opMulti.addEventListener('click',()=>{
    const valores=getValues()
    const resultado=operacoes[2](valores)
    resultField.innerHTML=resultado
})

opDivisao.addEventListener('click',()=>{
    const valores=getValues()
    const resultado=operacoes[3](valores)
    resultField.innerHTML=resultado
})




















// const operacoes=[
//     (values)=>{
//         let res=0
//         let value
//         for(value of values){
//             res+=value
//         }
//         const respostaCompleta=`Somatório: ${res}`
//         return respostaCompleta
//     },
//     (values)=>{
//         let res=1
//         let value
//         for(value of values){
//             res*=value
//         }
//         const respostaCompleta=`Multiplicação: ${res}`
//         return respostaCompleta
//     }
    
// ]

// for(let operacao of operacoes){
//     const resposta=operacao(valores)
//     console.log(resposta)
// }