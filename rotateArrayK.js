function rotateArray(arr, k) {
  // Your code here
  const newArr = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length - k; i++) {
    newArr.push(arr[i]); // Push the remaining elements
  }

  return newArr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [4, 5, 1, 2, 3]
