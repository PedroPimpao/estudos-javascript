// Desestruturacao

function main(){

    // const person={
    //     name: "Pedro",
    //     age: 19,
    //     isProgrammer: true
    // }

    // const {name, age, isProgrammer}=person
    // console.log(name)
    // console.log(age)
    // console.log(isProgrammer)


    // const colors=["verde", "amarelo", "azul", "rosa", "laranja"]
    // const [firstColor, secondColors]=colors

    // console.log(firstColor)
    // console.log(secondColors)

    const player={
        nickname: "Pedro",
        health: 20, 
        inventory:{
            items: ["sword", "shield", "bow"],
            potions: [
                {
                    type: "regeneration",
                    duration: 8
                },
                {
                    type: "defense",
                    duration: 9
                }
            ]
        },
    }

    // const { inventory: { potions}}=player
    // const [{type, duration}, {type: secontType, duration: secondDuration}]=potions
    
    // console.log(type, duration)
    // console.log(secontType, secondDuration)
     
    const {inventory : {potions:[{type: firstType ,duration: firstDuration}, {type: secondType, duration: secondDuration}]}}=player

    console.log(firstType, firstDuration)
    console.log(secondType, secondDuration)
}
main()