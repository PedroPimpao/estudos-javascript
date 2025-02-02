// Iteradores: 
// Arrays
// String
// Map
// Sets


const valores=[10,20,30,40,50,60,70]
const it_valores=valores[Symbol.iterator]()

console.log(valores)

let resultado=it_valores.next()
 
while(!resultado.done){
    console.log(resultado)
    resultado=it_valores.next()
}