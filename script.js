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
    return true
  } else {
    return false
  }
}

function isEmpty(value) {
  if (value === '') return true
  return false
}
