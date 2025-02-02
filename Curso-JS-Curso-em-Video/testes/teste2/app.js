const Button1=document.getElementById('btn-bloco1')
const Button2=document.getElementById('btn-bloco2')
const Block1=document.querySelector('.bloco1')
const Block2=document.querySelector('.bloco2')

Button1.addEventListener('click',function(){
    Button1.classList.add('active')
    Button2.classList.remove('active')
    Block1.style.display='flex'
    Block2.style.display='none'
})

Button2.addEventListener('click',function(){
    Button1.classList.remove('active')
    Button2.classList.add('active')
    Block1.style.display='none'
    Block2.style.display='flex'
})