const requestCar=(drivers)=>{
    return new Promise((resolve, reject)=>{
        if(drivers > 0){
            return resolve("Seu motorista está a caminho")
        }
        return reject("Não há motoristas disponíveis")
    })
}

async function main(){
    let drivers=0

    const request=await requestCar(drivers)
    .catch(()=>{
        return null
    })
    if(!request){
        console.log(`Erro`)
        return
    }

   console.log(request)

}
main()