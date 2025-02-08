function sumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0)
}

console.log(sumOfDigits(1234)) 
console.log(sumOfDigits(987)) 
