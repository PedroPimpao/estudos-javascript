/* const cursos=['HTML','CSS','JavaScript','PHP','React']

console.log('')
console.log('Com MAP: ')
cursos.map((item,index)=>{
    console.log(`Curso: ${item} ----- Posição: ${index}`)
})

console.log('')
console.log('Com FOREACH: ')

cursos.forEach((item,index)=>{
    console.log(`Curso: ${item} ----- Posição: ${index}`)
}) */

const divs=[...document.getElementsByTagName('div')]

const exibirInfo=(conjunto)=>{
    conjunto.map((item,index)=>{
        const conteudo=item.innerHTML
        console.log(`Conteúdo: ${conteudo} --- Indice: ${index}`)
    })
}
exibirInfo(divs)
