// Write a program to generate a random password of length n.
function generatePassword(n) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
  let password = ''

  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length)
    password += chars[randomIndex]
  }
  return password
}

let n = 8
console.log(generatePassword(n))
