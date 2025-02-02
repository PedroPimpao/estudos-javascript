const mudarTexto=()=>{
    const div1=document.querySelector('#div1')
    const div2=document.querySelector('#div2')
    const div3=document.querySelector('#div3')
    const todasDivs=[div1,div2,div3]
    todasDivs.forEach((item)=>{
        item.innerHTML=`TOMALÉ`
    })
}
mudarTexto()

const divs=[...document.getElementsByTagName('div')]
divs.forEach((item)=>{
    item.innerHTML+=` LICOPÉ`
})


