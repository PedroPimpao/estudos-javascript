const caixa1=document.querySelector('#emissor')
const element1=document.querySelector('#elemento1')

caixa1.addEventListener('click',(banana)=>{ 
    console.log(banana.target)
    console.log('clicou')
})

element1.addEventListener('click',(event)=>{
    console.log('Stop Propagation')
    event.stopPropagation()
})