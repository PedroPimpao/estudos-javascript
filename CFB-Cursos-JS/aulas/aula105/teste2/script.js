let senha=new String('@Bc456')

let nivelSeguranca=0

const caracteresEspeciais=()=>{
    if(senha.match(/[@#$&]/g)){
        console.log("Possui caracteres especiais")
        nivelSeguranca++
        return true
    }else{
        console.log("Não possui caracteres especiais")
        return false
    }
}

const numeros=()=>{
    if(senha.match(/[0-9]/g)){
        console.log("Possui numeros")
        nivelSeguranca++
        return true
    }else{
        console.log("Não possui numeros")
        return false
    }
}

const minusculas=()=>{
    if(senha.match(/[a-z]/g)){
        console.log("Possui letras minusculas")
        nivelSeguranca++
        return true
    }else{
        console.log("Não possui letras minusculas")
        return false
    }
}

const maiusculas=()=>{
    if(senha.match(/[A-Z]/g)){
        console.log("Possui letras maiusculas")
        nivelSeguranca++
        return true
    }else{
        console.log("Não possui letras maiusculas")
        return false
    }
}

caracteresEspeciais()
numeros()
minusculas()
maiusculas()
console.log(`\nNível de seguranca: ${nivelSeguranca}`)

const nivelSenha=()=>{
    if(nivelSeguranca==0){
        console.log("Senha inválida")
    }
    if(nivelSeguranca==1){
        console.log("Senha muito fraca")
    }
    if(nivelSeguranca==2){
        console.log("Senha fraca")
    }
    if(nivelSeguranca==3){
        console.log("Senha moderada")
    }
    if(nivelSeguranca==4){
        console.log("Senha forte")
    }
}

nivelSenha()