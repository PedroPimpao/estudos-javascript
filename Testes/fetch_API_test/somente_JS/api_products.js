const URL='https://dummyjson.com/products'

async function callAPI(){
    const resp= await fetch(URL)
    console.log(resp)
    if(resp.status===200){
        const obj=await resp.json()
        console.log(obj)
    }
}
callAPI()