let nome=new String("Brunoooooooo Pinho Campoooooo 1978")
let email="pedro@gmail.com"
let numeros="1, 10, 100, 1000"

console.log(nome)


console.log(nome.match(/o/ig))
console.log(nome.replace('Pinho','Manga'))
console.log(nome.match(/[oh]/ig))

console.log(nome.match(/[a-z|0-9]/ig)) //todos as letras de a ate z maiuculo e minusculo + numeros

//Metacaracteres
console.log(nome.match(/\d/ig)) //Numeros
console.log(nome.match(/\s/ig)) //Espacos
console.log(nome.match(/\bP/ig)) //DWORD

//Quantificadores
console.log(nome.match(/o+/ig))
console.log(nome.match(/no*/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))

