const usersMap=new Map([
    ["pedro", {age: 19, coins: 100}],
    ["cristiano", {age: 40, coins: 670}],
    ["messi", {age: 37, coins: 669}]
])

// usersMap.set("pedro", {age: 19, coins: 100})
// usersMap.set("cristiano", {age: 40, coins: 670})
// usersMap.set("messi", {age: 37, coins: 669})

console.log(usersMap)
console.log(usersMap.get('messi'))

const users={
    pedro:{
        age:19,
        coins:100
    },
    cristiano:{
        age:40,
        coins:670
    },
    messi:{
        age:37,
        coins:669
    },
}