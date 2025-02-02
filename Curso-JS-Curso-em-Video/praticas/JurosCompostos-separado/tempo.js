const submitButton=document.querySelector('.CalculateButton')
const DivResult=document.querySelector('.resultado')

submitButton.addEventListener('click',function(){
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
    DivResult.innerHTML=`Tempo: ${TimeResult} anos`
})