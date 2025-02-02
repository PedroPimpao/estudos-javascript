var vel=document.getElementById('velocidadeTxt')
var verificacaoBtn=document.getElementById('verificar')
var limiteVelocidade=60
verificacaoBtn.addEventListener('click',calcular)
function calcular(){
    var velocidadeValor=Number(vel.value)
    var ResultadoNaDiv=document.getElementById('resultadoDiv')
    ResultadoNaDiv.innerHTML=`${velocidadeValor} Km/h`

    if(velocidadeValor>limiteVelocidade){
        ResultadoNaDiv.innerHTML=`Acima do limite de velocidade! (${velocidadeValor} Km/h)`
    }
    else if(velocidadeValor<=limiteVelocidade){
        ResultadoNaDiv.innerHTML=`Dentro do limite de velocidade (${velocidadeValor} Km/h). Boa Viagem!`
    }
    else{
        ResultadoNaDiv.innerHTML=`Velocidade inválida`
    }
}


