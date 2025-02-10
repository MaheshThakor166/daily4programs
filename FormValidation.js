function validateForm({ email, password }) {
  const errors = []
  if (!email.includes('@')) errors.push('Invalid email')
  if (password.length < 6) errors.push('Password too short')
  return errors.length ? errors : 'Valid form'
}

console.log(validateForm({ email: 'test@', password: '1233434' }))
