let num=[5,8,2,9,3,"Camaro","Mamão Papaia"]
num.push("Manga")
num.push("2+1=4")
num.push(13)
let pos
for(pos=0;pos<num.length;pos++){
    console.log(num[pos])
}
console.log("Segunda forma:")

for(pos in num){
    console.log(`a posição ${pos} possui o valor ${num[pos]}`)
}