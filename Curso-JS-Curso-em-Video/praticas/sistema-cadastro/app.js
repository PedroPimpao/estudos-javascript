const nomeInput=document.getElementById('nomeInput')
const emailInput=document.getElementById('email')
const senhaInput=document.getElementById('senha')
const confirmaSenhaInput=document.getElementById('confirmaSenha')

function checkNameInput(){
    if(nomeInput.value.length==0){
        errorInput(nomeInput,"Insira um nome")
        return false
    }
    else{
        NoErrorInput(nomeInput,"")
        return true
    }
}

function checkEmailInput(){
    if(emailInput.value.length==0){
        errorInput(emailInput,"Insira um Email")
        return false
    }
    else{
        NoErrorInput(emailInput,"")
        return true
    }
}

function checkPassInput(){
    if(senhaInput.value.length==0){
        errorInput(senhaInput,"Insira uma senha")
        return false
    }
    else{
        NoErrorInput(senhaInput,"")
        return true
    }
}

function checkConfirmPassInput(){
    if(senhaInput.value===confirmaSenhaInput.value){ 
        NoErrorInput(confirmaSenhaInput,"")
        return true
    }    
    else{  
        errorInput(confirmaSenhaInput,"Senha inválida")
        return false
    }
}

function errorInput(input,mensagem){
    const formInput=input.parentElement;
    const textMessage=formInput.querySelector("a")
    textMessage.innerText=mensagem;
    input.className="inputTxt Erro"
}

function NoErrorInput(input,mensagem){
    const formInput=input.parentElement;
    const textMessage=formInput.querySelector("a")
    textMessage.innerText=mensagem;
    input.className="inputTxt"
}

function cadastrar(){
    if(checkNameInput() && checkEmailInput() && checkPassInput() && checkConfirmPassInput()){
        alert('TUDO CERTO')
    }
    else{
        alert('[ERRO]')
    }
}

























