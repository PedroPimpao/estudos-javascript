const Nave=function(energia){
    this.energia=energia
    this.disparos=100
}

const nave1=new Nave(100)

Nave.prototype.vidas=3

console.log(Nave)
console.log(nave1)
console.log(nave1.energia)
console.log(nave1.vidas)

