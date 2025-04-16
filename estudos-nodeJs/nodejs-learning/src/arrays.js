const numbers=[3,12,43,21,67,87,98,43,32]
const performe=(numberArray,exec)=>{
    console.log("=============")
    for(const number of numberArray){
        exec(number)
    }
    console.log("=============")
}

performe(numbers,number=>console.log(`Item atual: ${number}`))

const filterManual=((numberArray)=>{
    const filtered=numberArray.filter((number)=>{return number >= 50})
    console.log(filtered)
})
filterManual(numbers)

export {numbers, performe, filterManual}
