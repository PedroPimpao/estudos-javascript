function somar(){
    var tn1=document.getElementById('txtn1')
    var tn2=document.querySelector('input#txtn2')
    var res=document.getElementById('res')
    var n1=Number.parseFloat(tn1.value)
    var n2=Number.parseFloat(tn2.value)
    var resultado=n1+n2
    res.innerHTML=resultado
}