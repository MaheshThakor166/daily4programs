const obj = { name: 'Alice', details: { age: 25, city: 'New York' } }

const clonedObj = JSON.parse(JSON.stringify(obj))

clonedObj.details.city = 'Los Angeles'
console.log(obj.details.city)
