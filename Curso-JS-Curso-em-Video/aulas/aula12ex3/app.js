function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.getElementById('resultado')
    var foto=document.getElementById('foto')
    if(fano.value.length==0||fano.value>ano||fano.value<0){
        alert('Verifique os dados e tente novamente')
    }
    else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        var genero=''
        if(fsex[0].checked){
            genero='um Homem'
            if(idade>=0 && idade<=12){
                //Crianca
                foto.src='imagens/criancaMasc.jpeg'
            }
            else if(idade>=13 && idade<=17){
                //Adolescente
                foto.src='imagens/adolescenteMasc.jpeg'
            }
            else if(idade>=18 && idade<=60){
                //Adulto
                foto.src='imagens/adultoMasc.jpeg'
            }
            else if(idade>60){
                //Idoso
                foto.src='imagens/idosoMasc.jpeg'
            }
        }
        else if(fsex[1].checked){
            genero='uma Mulher'
            if(idade>=0 && idade<=12){
                //Crianca
                foto.src='imagens/criancaFem.jpeg'
            }
            else if(idade>=13 && idade<=17){
                //Adolescente
                foto.src='imagens/adolescenteFem.jpeg'
            }
            else if(idade>=18 && idade<=60){
                //Adulto
                foto.src='imagens/adultoFem.jpeg'
            }
            else if(idade>60){
                //Idoso
                foto.src='imagens/idosaFem.jpeg'
            }
        }
        res.innerHTML=`Você é ${genero} de ${idade} anos`
    }   
}