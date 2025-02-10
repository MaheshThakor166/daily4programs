
const validCodes = {
  SUMMER24: 0.2, 
  FREESHIP: 'free-shipping',
}

function validateDiscountCode(code) {
  return validCodes[code] || 'Invalid code'
}

// Usage:
console.log(validateDiscountCode('SUMMER2   4')) 
