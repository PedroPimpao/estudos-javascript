const emissorCursos=['HTML','CSS','JavaScript','Python']
const transferência=[]
const receptorCursos=[]


const transferirElementos=(emissor,transmisor,receptor)=>{
    transmisor.push(emissor[2])
    transmisor.push(emissor[3])

    // let larguraTransf=transmisor.length
    for(cursos of transmisor){
        receptor.push(cursos)
    }

    // console.log(emissor)
    // console.log(transmisor)
    // console.log(receptor)
    return {emissor, transmisor, receptor}
}

const transferir=transferirElementos(emissorCursos,transferência,receptorCursos)
console.log(transferir)