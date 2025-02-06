// Rewrite the following code using async/await instead of .then():
// fetch('https://api.example.com/data')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))

const fetch_Data = async () => {
  try {
    const response = await fetch('https://api.github.com/users/MaheshThakor166')
    const fetch_data = await response.json()
    console.log(fetch_data)
  } catch (error) {
    console.log(error)
  }
}
fetch_Data()
