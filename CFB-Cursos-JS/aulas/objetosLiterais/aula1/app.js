const objetos=document.querySelector('#objetos')

const computador={
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",

    info:function(){
        console.log("Info: ")
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);  
    }
}

delete(computador.hd)

const c2=Object.create(computador)
c2.info()

const c1 = Object.assign({}, computador)
c1.info()

const o1={obj1: '1'}
const o2={obj2: '2'}
const o3={obj3: '3'}
const o4=Object.assign(o1, o2, o3)
console.log(o4);


const computadores=[
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i6",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i5",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i7",
        ram: "64gb",
        hd: "2tb"
    },
]

computadores.map((computador)=>{
    console.log(computador)
    const div=document.createElement('div')
    div.classList.add("objeto")
    // div.innerHTML+=""
    div.innerHTML+=`CPU: ${computador.cpu} <br/>`
    div.innerHTML+=`RAM: ${computador.ram} <br/>`
    div.innerHTML+=`HD: ${computador.hd} ` 
    // div.innerHTML+=""
    objetos.append(div)
})
// objetos.innerHTML=JSON.stringify(computadores)
