// Iteradores: 
// Arrays
// String
// Map
// Sets


const valores=[10,20,30,40,50,60,70]
const it_valores=valores[Symbol.iterator]()

console.log(valores)
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())



while(valores){
    console.log(it_valores.next())
}