const caixa=document.querySelector('#caixa')
const mapa=new Map()

mapa.set('Curso 1','JavaScript')
mapa.set('Curso 2','Python')

console.log(mapa)
if(mapa.has('Curso 3')){
    caixa.innerHTML='A chave existe na coleção'
}else{
    caixa.innerHTML=`A chave não existe na coleção`
}
// caixa.innerHTML=mapa.get('Curso 1')










































