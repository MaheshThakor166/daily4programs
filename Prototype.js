// Add the 'last' method to Array.prototype
Array.prototype.last = function () {
  return this[this.length - 1] // 'this' refers to the array instance
}

Array.prototype.first=function () {
    return this[this[0]-1]
    
}
// Now all arrays have the 'last' method
const arr = [1, 45,4, 3, 4]
console.log(arr.last()) // Output: 4
console.log(arr.first());
