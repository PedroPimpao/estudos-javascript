var pais='Brasil'
var paisInserido=document.getElementById('paisInput')

var confirmar=document.getElementById('btn-confirmacao')
var resultado=document.getElementById('resultadoDiv')

confirmar.addEventListener('click',verificar)
function verificar(){
    var paisInput=(paisInserido.value)
    var paisInputMaiusc=paisInput.toUpperCase()
    var paisMaiusc=pais.toUpperCase()

    if(paisInputMaiusc===paisMaiusc){
        resultado.innerHTML=`Você é <strong>Brasileiro</strong>`
    }
    else{
        resultado.innerHTML=`Você é <strong>Gringo</strong>`
    }
    alert(paisInput)
}


