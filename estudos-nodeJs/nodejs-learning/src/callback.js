import { numbers, performe, filterManual} from "./arrays.js";

performe(numbers, number=>console.log(`Item atual: ${number}`))
filterManual(numbers)

const filter=(array, callback)=>{
    const filtered=[]
    for(let i=0; i<array.length;i++){
        if(callback(array[i],i,array)){
            filtered.push(array[i])
        }
    }
    return filtered
}
const values=[12,32,45,76,43,77,987,54]
const filterdValues=filter(values, (value)=>{return value > 70})
console.log(filterdValues)

let count=0
const timer=setInterval(()=>{
    if(count==10){
        console.log("Acabou!")
    }
    if(count > 10){
        clearInterval(timer)
        return;
    }
    console.log(`Olá Mundo! ${count}`)
    count++
},500)