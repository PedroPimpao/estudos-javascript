/* function* perguntas(){
    const nome=yield 'Qual o seu nome?'
    const esporte=yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itc=perguntas()
console.log(itc.next().value)
console.log(itc.next('Pedro').value)
console.log(itc.next('Automobilismo').value)
 */

function* contador(){
    let i=0
    while(true){
        yield i++
    }
}

const itc=contador()
function exibirContagem(numero){
    let i=0
    let valores=[]
    for(i-0;i<numero;i++){
        // console.log(itc.next().value)
        valores.push(itc.next().value)
    }
    console.log(valores)
}

exibirContagem(45)
// console.log(`Valores: ${exibirContagem(10)}`)

 