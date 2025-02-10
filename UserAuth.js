const users = [{ email: 'user@example.com', password: '123456' }]

function login(email, password) {
  return users.some(
    (user) => user.email === email && user.password === password
  )
}

function logout() {
  console.log('User logged out')
}

console.log(
  login('user@example.com', '123456') ? 'Access granted' : 'Invalid credentials'
)
