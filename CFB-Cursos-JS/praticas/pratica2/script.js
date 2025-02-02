const cursosEmissor=[...document.querySelectorAll('.cursos')]
const transmissor=[]
const containerEmissor=document.querySelector('#emissor')
const containerReceptor=document.querySelector('#receptor')
const copyButton=document.querySelector('#copyButton')


cursosEmissor.forEach((item)=>{
    item.addEventListener('click',(evt)=>{
        const curso=evt.target
        curso.classList.toggle('ativo')
        curso.classList.toggle('inativo')
    })
})

copyButton.addEventListener('click',()=>{
    const cursosSelecionados=[...document.querySelectorAll('.ativo')]
    const cursosNaoSelecionador=[...document.querySelectorAll('.inativo')]
    
    cursosSelecionados.sort()
    cursosNaoSelecionador.sort()

    cursosSelecionados.map((item)=>{
        containerReceptor.appendChild(item)
    })
    cursosNaoSelecionador.map((item)=>{
        containerEmissor.appendChild(item)
    })
})