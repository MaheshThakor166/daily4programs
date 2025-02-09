function removeWhitespace(str) {
  return str.replace(/\s+/g, '')
}

let input = ' Hello   World!  Welcome to  MY 100 Days of Coding. '
let result = removeWhitespace(input)
console.log(result)
