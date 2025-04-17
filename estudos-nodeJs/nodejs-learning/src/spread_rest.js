const player={
    nickname: "Pedro",
    health: 20,
    inventory:{
        items: ["sword", "shield", "bow"],
        potions: [
            {type: "regeneration", duration: 8},
            {type: "defense", duration: 10}
        ]
    }
}

const updatePlayer=(player, newProps)=>{
    return {...player, ...newProps}
}

const updatedPlayer=updatePlayer(player, {
    nickname:"Mauro",
    coins:0
})
console.log(player)
console.log(updatedPlayer)

const positive=[1,2,3,4]
const negative=[-1,-2,-3,-4]
const numbers=[...positive, ...negative]

const [one, two, ...other]=numbers
console.log(one, two)
console.log(other)