async function fetchData(url) {
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    let data = await response.json()
    return data
  } catch (error) {
    return 'Error fetching data'
  }
}

fetchData('https://api/github.com/users')
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
