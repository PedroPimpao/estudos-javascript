function calcJuros(Mont,Cap){
    var Juros=Mont-Cap
    return Juros
}
var Montante=1602.86
var Capital=1400
var Juros=calcJuros(Montante,Capital).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
console.log(`Juros: ${Juros}`)