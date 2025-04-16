const fat=(number, result=1)=>{
    if(number < 1){
        return result
    }
    return fat(number-1, result * number)
}
const resultado=fat(5)
console.log(resultado)