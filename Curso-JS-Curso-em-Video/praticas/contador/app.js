const subtrair=document.getElementById('btn-subtrair')
const adicionar=document.getElementById('btn-adicionar')
const numeroTxt=document.getElementById('numeroTxt')
var numero=Number(numeroTxt.innerHTML)

function decremento(){
    if(numero>0){
        numero-=1
        numeroTxt.innerHTML=`${numero}`
    }
}

function incremento(){
    numero+=1
    numeroTxt.innerHTML=`${numero}`
}
