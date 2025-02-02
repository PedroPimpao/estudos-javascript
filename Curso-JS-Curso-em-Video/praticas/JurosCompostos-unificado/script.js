//Capturando os valores Radio
const Button1=document.querySelector('#label-1')
const Button2=document.querySelector('#label-2')
const Button3=document.querySelector('#label-3')

//Capturando os blocos
const Block1=document.querySelector('.campoMontante')
const Block2=document.querySelector('.campoCapital')
const Block3=document.querySelector('.campoTempo')

//Capturando os submitButton
const submitMont=document.querySelector('.CalculateButtonMont')
const submitCap=document.querySelector('.CalculateButtonCap')
const submitTempo=document.querySelector('.CalculateButtonTempo')

//Capturando as divs resultado
const DivResultMont=document.querySelector('.resultadoMont')
const DivResultCap=document.querySelector('.resultadoCap')
const DivResultTempo=document.querySelector('.resultadoTempo')

//Alternação dos blocos
Button1.addEventListener('click',function(){
    Block1.style.display='flex'
    Block2.style.display='none'
    Block3.style.display='none'

    submitMont.style.display='block'
    submitCap.style.display='none'
    submitTempo.style.display='none'

    DivResultMont.style.display='block'
    DivResultCap.style.display='none'
    DivResultTempo.style.display='none'
})

Button2.addEventListener('click',function(){
    Block1.style.display='none'
    Block2.style.display='flex'
    Block3.style.display='none'

    submitMont.style.display='none'
    submitCap.style.display='block'
    submitTempo.style.display='none'

    DivResultMont.style.display='none'
    DivResultCap.style.display='block'
    DivResultTempo.style.display='none'
})

Button3.addEventListener('click',function(){
    Block1.style.display='none'
    Block2.style.display='none'
    Block3.style.display='flex'

    submitMont.style.display='none'
    submitCap.style.display='none'
    submitTempo.style.display='block'

    DivResultMont.style.display='none'
    DivResultCap.style.display='none'
    DivResultTempo.style.display='block'
})

//Calculo Montante
submitMont.addEventListener('click',function(){
    const capitalValue=document.querySelector('#capitalTxt').value
    const timeValue=document.querySelector('#tempoTxt').value
    const taxValue=document.querySelector('#taxaTxt').value

    const capital=Number(capitalValue)
    const time=Number(timeValue)
    const tax=Number(taxValue)
    const taxDec=tax/100

    function calcAmount(Cap,Time,Tax){
        var Amount=Cap*(1+Tax)**(Time/12)
        return Amount
    }
    const AmountFinal=calcAmount(capital,time,taxDec).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    console.log(`Montante final: ${AmountFinal}`)
    DivResultMont.innerHTML=`${AmountFinal}`
})

//Calculo Capital
submitCap.addEventListener('click',function(){
    const AmountValue=document.querySelector('#montanteTxt').value
    const TimeValue=document.querySelector('#tempoTxt').value
    const TaxValue=document.querySelector('#taxaTxt').value

    const Amount=Number(AmountValue)
    const TimeMonth=Number(TimeValue)
    const TimeYear=TimeMonth/12
    const Tax=Number(TaxValue)
    const TaxDec=Tax/100

    function calcCapital(Mont,Time,Tax){
        var Capital=Mont/Math.pow((1+Tax),Time)
        return Capital
    }
    const CapitalResult=calcCapital(Amount,TimeYear,TaxDec).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    console.log(`Capital Inicial: ${CapitalResult}`)
    DivResultCap.innerHTML=`${CapitalResult}`
})

//Calculo Tempo
submitTempo.addEventListener('click',function(){
    const CapitalValue=document.querySelector('#capitalTxt').value
    const AmountValue=document.querySelector('#montanteTxt').value
    const TaxValue=document.querySelector('#taxaTxt').value
    
    const Capital=Number(CapitalValue)
    const Amount=Number(AmountValue)
    const Tax=Number(TaxValue)
    const TaxDecimal=Tax/100

    function calcTempo(Cap,Mont,Tax){
        var Time=(Math.log10(Mont/Cap))/Math.log10(1+Tax)
        return Time
    }

    var TimeResult=calcTempo(Capital,Amount,TaxDecimal).toFixed(1)
    console.log(`Tempo: ${TimeResult} anos`)
    DivResultTempo.innerHTML=`Tempo: ${TimeResult} anos`
})