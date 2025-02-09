const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
let target = 23
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

console.log(binarySearch(arr, target))
