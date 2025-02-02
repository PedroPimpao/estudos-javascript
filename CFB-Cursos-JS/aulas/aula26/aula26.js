const valores=[10,20,30,60]
const soma=(valores)=>{
    const somar=val=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    }
    return console.log(somar(valores))
}
soma(valores)