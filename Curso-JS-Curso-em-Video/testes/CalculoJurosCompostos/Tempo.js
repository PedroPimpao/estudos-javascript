//Calculo do tempo
function calcTempo(Mont,Cap,Tax){
    const Time=(Math.log10(Mont/Cap))/Math.log10(1+Tax)
    return Time
}
var Montante=1602.86
var Capital=1400
var TaxaJuros=7

var TaxaDec= TaxaJuros/100
const Tempo=calcTempo(Montante,Capital,TaxaDec)
console.log(`O tempo: ${Tempo.toFixed(1)} anos`)
