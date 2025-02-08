// function fetchData(callback) {
//   setTimeout(() => {
//     callback('Data received')
//   }, 2000)
// }
// fetchData();
// Converted to Promise
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received')
    }, 2000)
  })
}

// Using the promise function
fetchDataPromise().then(console.log) 
