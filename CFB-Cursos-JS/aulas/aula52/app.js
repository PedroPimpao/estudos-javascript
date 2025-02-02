const container=document.querySelector('#caixa')
let cursos=['HTML','CSS','JavaScript']

console.log(cursos)

cursos.map((item)=>{
    const curso=document.createElement('p')
    curso.innerHTML=item
    container.append(curso)
})