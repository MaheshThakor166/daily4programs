// Write a JavaScript function that takes an array of objects representing users and returns an array of names of users who are 18 years or older.
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 16 },
]
const result = users
  .filter((person) => person.age > 18)
  .map((person) => person.name)
console.log(result)
