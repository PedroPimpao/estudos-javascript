const submitButton=document.querySelector('.CalculateButton')
const DivResult=document.querySelector('.resultado')

submitButton.addEventListener('click',function(){
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
    DivResult.innerHTML=`${AmountFinal}`
})