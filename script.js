const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const email = document.getElementById('email')

const form = document.getElementById('myForm')

const green = '#4CAF50'
const red = '#F44336'

function validateFirstName() {
  if (checkIfEmpty(firstName)) return
}

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    setInvalid(field, `${field.name} must not be empty`)
    return true
  } else {
    setValid(field)
    return false
  }
}

function isEmpty(value) {
  if (value === '') return true
  return false
}

function setInvalid(field, message) {
  field.className = 'invalid'
  field.nextElementSibling.innerHTML = message
  field.nextElementSibling.style.color = red
}

function setValid() {
  field.className = 'valid'
  field.nextElementSibling.innerHTML = ''
  field.nextElementSibling.style.color = green
}
