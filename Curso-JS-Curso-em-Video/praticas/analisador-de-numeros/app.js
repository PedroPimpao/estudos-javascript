var numero=document.getElementById('numerotxt')
var lista=document.getElementById('listaF')
var resultadoDiv=document.getElementById('res')
var valores=[]

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
        var item=document.createElement('option')
        item.text=`Número ${numero.value} adicionado`
        lista.appendChild(item)
    }
    else{
        alert(`[ERRO] Inválido. Valor inserido: ${numero.value}`)
    }
    numero.value=''
    numero.focus()
}

function finalizar(){
    if(valores.length==0){
        alert(`Insira valores antes de finalizar!`)
    }
    else{
        valores.sort()
        var totalValores=valores.length
        var maior=valores[0]
        var menor=valores[0]
        var somatorioValores=0
        var mediaValores=0

        for(var pos=0;pos<valores.length;pos++){
            if(valores[pos]>maior){
                maior=valores[pos]
            }
            if(valores[pos]<menor){
                menor=valores[pos]
            }
        }
        for(var pos=0;pos<valores.length;pos++){
            somatorioValores+=valores[pos]
        }
        mediaValores=somatorioValores/valores.length
    }
    resultadoDiv.innerHTML+=`Foram inseridos ${totalValores}<br>`
    resultadoDiv.innerHTML+=`O maior valor é ${maior}<br>`
    resultadoDiv.innerHTML+=`O menor valor é ${menor}<br>`
    resultadoDiv.innerHTML+=`O somatório dos valores é ${somatorioValores}<br>`
    resultadoDiv.innerHTML+=`A média dos valores é ${mediaValores}<br>`
}
