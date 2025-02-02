//Calculo do montante---Tempo em meses
function calcMontante(Cap,Tax,Time){
    var Mont
    Mont=Cap*(1+Tax)**(Time/12)
    return Mont
}
var Capital=1400
var Taxa=7
var Tempo=24 

var TaxaDec=Taxa/100
const resultado=calcMontante(Capital,TaxaDec,Tempo)
const resultadoReal=resultado.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
console.log(`O montante após ${Tempo} meses é: ${resultadoReal}`)
