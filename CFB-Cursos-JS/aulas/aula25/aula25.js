// const soma=function(v1,v2){return v1+v2}

const valor_padrao=0
const soma=(v1=valor_padrao,v2=valor_padrao)=>{
    const soma=v1+v2
    console.log(`Resultado da soma: ${soma}`)
}
soma(10,21)

const texto="Fala aí"
const apresentarTexto=text=>{console.log(`Texto apresentado: ${text}`)}
apresentarTexto(texto)