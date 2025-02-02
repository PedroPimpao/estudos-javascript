function calculate(){
    const pesoTxt=document.getElementById('pesoTxt')
    const alturaTxt=document.getElementById('alturaTxt')
    const idadeTxt=document.getElementById('idadeTxt')
    const resultDiv=document.getElementById('resultDiv')

    const idadeNum=Number(idadeTxt.value)
    const pesoNum=Number(pesoTxt.value)
    const alturaNum=Number(alturaTxt.value)
    var resultadoImc=0
    if(alturaNum==0 || pesoNum==0){
        resultadoImc==0
    }
    else{
        resultadoImc=pesoNum/(alturaNum**2)
    }

    var classificacaoImc=''
    if(resultadoImc==0){
        classificacaoImc='Peso ou Altura não inseridos'
    }
    else if(resultadoImc<18.5){
        classificacaoImc=`Abaixo do Peso`
    }
    else if(resultadoImc>=18.5 && resultadoImc<25){
        classificacaoImc='Saudável'
    }
    else if(resultadoImc>=25 && resultadoImc<30){
        classificacaoImc='Sobrepeso'
    }
    else if(resultadoImc>=30 && resultadoImc<35){
        classificacaoImc='Obesidade Grau I'
    }
    else if(resultadoImc>=35 && resultadoImc<40){
        classificacaoImc='Obesidade Grau II'
    }
    else if(resultadoImc>=40){
        classificacaoImc='Obesidade Grau III'
    }
    else{
        classificacaoImc='Inválido'
    }

    resultDiv.className='ShowResult'
    resultDiv.innerHTML+=''
    resultDiv.innerHTML+=`Você possui <strong>${idadeNum}</strong> anos <br>`
    resultDiv.innerHTML+=`Seu IMC:<strong>${resultadoImc.toFixed(2)}</strong> <br>`
    resultDiv.innerHTML+=`Classificação: <strong>${classificacaoImc}</strong>`
}

function ChangeMenStyle(){
    const background=document.getElementById('body')
    const MainBackground=document.getElementById('calculator')
    const SexOptionMen=document.getElementById('opcaoHomem')
    const SexOptionWomen=document.getElementById('opcaoMulher')
    SexOptionMen.className=`SexOptionMen`
    SexOptionWomen.className=`SexOptionMen`
    background.className=`backgroundColorMen` 
    MainBackground.className=`calculatorMen`   
}

function ChangeWomenStyle(){
    const background=document.getElementById('body')
    const MainBackground=document.getElementById('calculator')
    const SexOptionMen=document.getElementById('opcaoHomem')
    const SexOptionWomen=document.getElementById('opcaoMulher')
    SexOptionMen.className=`SexOptionWomen`
    SexOptionWomen.className=`SexOptionWomen`
    background.className=`backgroundColorWomen`
    MainBackground.className=`calculatorWomen`
}