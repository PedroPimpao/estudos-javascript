const btn= document.getElementById('enviar')
function ler(){
    const nome=document.getElementById('texto')
    const value=nome.value
    alert(value)
}
btn.addEventListener('click',ler)