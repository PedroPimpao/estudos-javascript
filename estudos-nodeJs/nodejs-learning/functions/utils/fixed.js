import { sum } from "../math/sum.js"

export const fixedSum=(a, b)=>{
    const result=sum(a,b)
    return result.toFixed(2)
}