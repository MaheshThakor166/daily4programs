let str = 'hello guys HOw ARe you what about you'

function capitalFirst(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
console.log(capitalFirst(str))
