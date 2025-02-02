/* const valor_padrao=0
const f=function(v1=valor_padrao,v2=valor_padrao){
    return v1+v2
}

const primeiro_valor=10
const segundo_valor=30

console.log(f(primeiro_valor,segundo_valor))
 */

/* const f=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(10,5,3))  */

/* const valores=[10,20,30]
const f=function(valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(valores))  */

const f=new Function("v1","v2","return v1+v2") 

console.log(f(10,5))
