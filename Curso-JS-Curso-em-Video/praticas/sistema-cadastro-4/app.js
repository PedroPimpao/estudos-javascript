
function Cadastrar(){
    const inputNameTxt=document.getElementById('nameTxt')
    const inputEmailTxt=document.getElementById('emailTxt')
    const inputPassTxt=document.getElementById('passwordTxt')
    const inputConfPassTxt=document.getElementById('passwordConfirmTxt')

    function checkInputName(){
        if(inputNameTxt.value.length==0){
            InputError(inputNameTxt,"Insira um nome")
        }
        else{
            NoInputError(inputNameTxt,"")
        }
    }

    function checkInputEmail(){
        if(inputEmailTxt.value.length==0){
            InputError(inputEmailTxt,"Insira um email")
        }
        else{
            NoInputError(inputEmailTxt,"")
        }
    }

    function checkInputPass(){
        if(inputPassTxt.value.length==0 || inputPassTxt.value.length<8){
            InputError(inputPassTxt,"Insira uma senha valida")
        }
        else{
            NoInputError(inputPassTxt,"")
        }
    }
    function checkInputPassConfirm(){
        if(inputPassTxt.value!=inputConfPassTxt.value || inputConfPassTxt.value.length==0){
            InputError(inputConfPassTxt,"Repita a senha inserida anteriormente")
        }
        else{
            NoInputError(inputConfPassTxt,"")
        }
    }

    function InputError(input,message){
        const InputBox=input.parentElement
        const ErrorMessage=InputBox.querySelector('a')
        input.className=`inputFieldError`
        ErrorMessage.innerHTML=message
    }
    function NoInputError(input,message){
        const InputBox=input.parentElement
        const ErrorMessage=InputBox.querySelector('a')
        input.className=`inputField`
        ErrorMessage.innerHTML=message
    }

    checkInputName()
    checkInputEmail()
    checkInputPass()
    checkInputPassConfirm()

    //SexOption

    const menOption=document.getElementById('MenOption')
    const womenOption=document.getElementById('WomenOption')
    if(menOption.checked){
        console.log(`Sexo: ${menOption.value}`)
    }
    else if(womenOption.checked){
        console.log(`Sexo: ${womenOption.value}`)
    }
    else{
        console.log('Opção não identificada')
    }
}