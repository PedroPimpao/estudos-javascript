const funcaoA=()=>{
    return 'A'
}
const funcaoB=()=>{
    return 'B'
}
const funcaoC=()=>{
    return 'C'
}
const funcaoD=()=>{
    return 'D'
}
const funcaoE=()=>{
    return 'E'
}

const escolhaFuncao=6

const funcoesObj={
    1:funcaoA(),
    2:funcaoB(),
    3:funcaoC(),
    4:funcaoD(),
    5:funcaoE()
}
let funcaoSelecionada=funcoesObj[escolhaFuncao]

if(funcaoSelecionada==undefined){
    console.log('Função não encontrada')
}else{
    console.log(funcaoSelecionada)
}