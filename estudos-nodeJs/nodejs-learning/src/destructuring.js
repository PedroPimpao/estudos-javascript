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
const {inventory: {potions: [{type: firstType, duration: firstDuration},{type: secondType, duration: secondDuration}]}}=player
console.log(firstType, firstDuration)
console.log(secondType, secondDuration)