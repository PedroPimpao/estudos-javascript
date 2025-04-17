const requestCar=(drivers)=>{
    return new Promise((resolve, reject)=>{
        if(drivers > 0){
            return resolve("Seu motorista está a caminho")
        }
        return reject("Não há motoristas disponíveis")
    })
}

let drivers=0

async function mainTry(){
    
    try {
        const request=await requestCar(drivers)
        console.log("Try (Try e catch): ")
        console.log(request)
    } catch (error) {
        console.log("Catch error (Try e catch): ")
        console.log(error)
    }

}
mainTry()


const mainThen=()=>{
    
    requestCar(drivers)
    .then((text)=>{
        console.log("Then (then e catch):")
        console.log(text)
    })
    .catch((error)=>{
        console.log("Catch (then e catch):")
        console.log(error)
    })
    .finally(()=>{
        console.log('Fim (then e catch)')
    })
    
}
mainThen()

