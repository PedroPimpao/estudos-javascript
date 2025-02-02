function cadastrar(){
    const nomeInput=document.getElementById('nomeTxt')
    const emailInput=document.getElementById('emailTxt')
    const senhaInput=document.getElementById('senhaTxt')
    const ConfSenhaInput=document.getElementById('ConfSenhaTxt')

    function ErrorInput(input,mensagem){
        const inputBox=input.parentElement;
        const errorMessage=inputBox.querySelector('a')
        errorMessage.innerText=mensagem;
        input.className=`inputTxt Erro`
    }

    function NoErrorInput(input,mensagem){
        const inputBox=input.parentElement;
        const errorMessage=inputBox.querySelector('a')
        errorMessage.innerText=mensagem;
        input.className=` inputTxt`
    }
    function checkNameInput(){
        if(nomeInput.value.length==0){
            ErrorInput(nomeInput,"Insira o nome")
        }
        else{
            NoErrorInput(nomeInput,"")
        }
    }

    function checkEmailInput(){
        if(emailInput.value.length==0){
            ErrorInput(emailInput,"Insira um email")
        }
        else{
            NoErrorInput(emailInput,"")
        }
    }

    function checkPassInput(){
        if(senhaInput.value.length==0){
            ErrorInput(senhaInput,"Insira uma senha")
        }
        else{
            NoErrorInput(senhaInput,"")
        }
    }

    function checkConfPassInput(){
        if(ConfSenhaInput.value!=senhaInput.value || ConfSenhaInput.value.length==0){
            ErrorInput(ConfSenhaInput,"Senha Inválida")
        }
        else{
            NoErrorInput(ConfSenhaInput,"")
        }
    }
    checkNameInput()
    checkEmailInput()
    checkPassInput()
    checkConfPassInput()
}