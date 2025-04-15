// Objetos

const player={
    nickname: "Pedro",
    health: 20,
    isDead: false,
    present(){
        console.log(`Meu nickname é: ${this.nickname}`)
    }
}

player.present()

console.log(player.nickname)
console.log(player)


const ramMemory={
    name: "HyperX",
    size: 16000
}

const computer={
    motherboard: "B360M",
    videoCard: "RTX 2070",
    cpu: "Intel Core I5",
    font: {
        name: "XPG Core Reactor",
        watts: 800
    },
    case: {
        name: "Draco Gamer",
        color: "black"
    },
    ram: [
        ramMemory,
        ramMemory,
        {
            name: "HyperX",
            size: 16000
        }
    ]
}

console.log(computer.font.watts)
console.log(computer.ram)