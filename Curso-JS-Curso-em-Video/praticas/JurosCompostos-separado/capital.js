const submitButton=document.querySelector('.CalculateButton')
const DivResult=document.querySelector('.resultado')

submitButton.addEventListener('click',function(){
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
    DivResult.innerHTML=`${CapitalResult}`
})
