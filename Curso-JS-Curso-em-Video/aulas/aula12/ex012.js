var agora=new Date()
var hora=agora.getHours()
var minutos=agora.getMinutes()
console.log(`Agora são ${hora}:${minutos}`)
if(hora<12){
    console.log("Bom dia")
}
else if(hora>=12 && hora<18){
    console.log("Boa tarde")
}
else if(hora>=18){
    console.log("Boa noite")
}
