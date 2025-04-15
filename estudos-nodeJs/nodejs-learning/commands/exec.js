import { sum } from "../functions/math/sum.js"
export const exec=(name)=>{
    console.log(`${name} executou uma soma`)
    console.log(sum(11,7))
}