//Tempo em meses
function calcCapital(Mont,Tax,Time){
    var capital=Mont/((1+Tax)**Time)
    return capital
}
var Montante=1602.86
var Taxa=7
var TempoMeses=24
var Tempo=TempoMeses/12

var TaxaDec=Taxa/100

const capital=calcCapital(Montante,TaxaDec,Tempo)
console.log(`Capital ${capital.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)