const numbers= new Set([1,4,7,33,22,89,98,77,66,456,456])
numbers.add(22)
numbers.add(555)
numbers.delete(1)
console.log(numbers.has(456))
// numbers.clear() limpa o array
console.log(numbers)
console.log(numbers.size)
