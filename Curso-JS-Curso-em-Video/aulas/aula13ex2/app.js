function calcular(){
    let numero=document.getElementById('numerotxt')
    let tab=document.getElementById('seltab')
    if(numero.value.length==0){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        let num=Number(numero.value)
        let res=0
        for(let c=1;c<=10;c++){
            let item=document.createElement('option')
            res=num*c
            item.text=`${num} x ${c} = ${res}`
            tab.appendChild(item)
        }
    }
}