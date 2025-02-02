var agora=new Date()
var dia=agora.getDate()
var mes=agora.getMonth()
var ano=agora.getFullYear()
var diaSemana=agora.getDay()
var diaSemanaNome=''


switch(diaSemana){
    case 0:
    diaSemanaNome='Domingo'
        break
    case 1:
        diaSemanaNome='Segunda-Feira'
        break
    case 2:
        diaSemanaNome='Terça-Feira'
        break
    case 3:
        diaSemanaNome='Quarta-Feira'
        break
    case 4:
        diaSemanaNome='Quinta-Feira'
        break
    case 5:
        diaSemanaNome='Sexta-Feira'
        break
    case 6:
        diaSemanaNome='Sábado'
        break
    default:
        diaSemanaNome='Erro'
        console.error("Dia da semana inválido")
        break
}

console.log(`Data de hoje: ${dia}/${mes+1}/${ano}`)
console.log(`Hoje é ${diaSemanaNome}`)