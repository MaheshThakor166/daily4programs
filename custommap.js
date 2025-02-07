Array.prototype.customMap = function (callback) {
  let resultArray = []
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this))
  }
  return resultArray
}


const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.customMap((num) => num * num)

console.log(squaredNumbers) 
