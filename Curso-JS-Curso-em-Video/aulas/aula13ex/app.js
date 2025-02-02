function contar(){
    let inicio=document.getElementById('iniciotxt')
    let final=document.getElementById('fimtxt')
    let razao=document.getElementById('razaotxt')
    let resp=document.getElementById('resposta')
    if(inicio.value.length==0||final.value.length==0||razao.value.length==0){
        alert('[ERRO] Algo deu errado. Tente novamente')
    }
    else{
        resp.innerHTML=`Contando: `
        let i=Number(inicio.value)
        let f=Number(final.value)
        let r=Number(razao.value)
        if(r<=0){
            alert('[ERRO] Valor de PASSO inválido. Consirderando PASSO 1')
            r=1
        }
        if(i<f){
            for(let c=i;c<=f;c+=r){
                resp.innerHTML+=` ${c}`
            }
        }   
        else{
            for(let c=i;c>=f;c-=r){
                resp.innerHTML+=` ${c}`
            }
        }
    }
}