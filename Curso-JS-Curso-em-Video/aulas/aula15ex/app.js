let numero=document.getElementById('numerotxt')
let lista=document.getElementById('flista')
let resultado=document.getElementById('res')
let valores=[]

function isNumber(num){
    if(Number(num)>=1 && Number(num)<=100){
        return true
    }
    else{
        return false
    }
}
function inList(num,val){
    if(val.includes(Number(num))){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumber(numero.value) && !inList(numero.value,valores)){
        valores.push(Number(numero.value))
        let item=document.createElement('option')
        item.text=`${numero.value}`
        lista.appendChild(item)  
    }
    else{
        alert(`[ERRO] Valor digitado ${numero.value}`)
    }
    numero.value=''
    numero.focus()
}

function analisar(){
    if(valores.length==0){
        alert('Adicione valores antes de finalizar!')
    }
    else{
        valores.sort()
        var totalValores=valores.length
        var maiorValor=valores[0]
        var menorValor=valores[0]
        var somaValores=0
        var mediaValores=0
        for(let pos in valores){
            if(valores[pos]>maiorValor){
                maiorValor=valores[pos]
            }
            if(valores[pos]<menorValor){
                menorValor=valores[pos]
            }
        }
        for(let pos in valores){
            somaValores+=valores[pos]
        }
        mediaValores=somaValores/valores.length
        
        resultado.innerHTML+=`<p>O vetor possui <strong>${totalValores}</strong> valores</p>`
        resultado.innerHTML+=`<p>O maior valor é <strong>${maiorValor}</strong></p>`
        resultado.innerHTML+=`<p>O menor valor é <strong>${menorValor}</strong></p>`
        resultado.innerHTML+=`<p>A soma dos valores é <strong>${somaValores}</strong></p>`
        resultado.innerHTML+=`<p>A média dos valores é <strong>${mediaValores}</strong></p>`
    }
}
