function carregar(){
    var agora=new Date()
    var hora=agora.getHours()
    var mensagem=document.getElementById('msgHora')
    var img=document.getElementById('imagem')
    var body=document.getElementById('corpo')
    mensagem.innerHTML=`Agora são ${hora} horas`
    if(hora>=0 && hora<12){
        //BOM DIA
        img.src='imagens/imagemDia.jpg'
        body.style.backgroundColor='#add8e6'
    }
    else if(hora>=12 && hora<18){
        //BOA TARDE
        img.src='imagens/imagemTarde.jpg'
        body.style.backgroundColor='#deb887'
    }
    else{
        //BOA NOITE
        img.src="imagens/imagemNoite.jpg"
        body.style.backgroundColor='#6565b3'
    }
}