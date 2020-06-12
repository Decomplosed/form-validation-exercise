const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const email = document.getElementById('email')

const form = document.getElementById('myForm')

const green = '#4CAF50'
const red = '#F44336'

// Validators

function validateFirstName() {
  if (checkIfEmpty(firstName)) return
  if (!checkIfOnlyLetters(firstName)) return
  return true
}

function validateLastName() {
  if (checkIfEmpty(lastName)) return
  if (!checkIfOnlyLetters(lastName)) return
  return true
}

function validatePassword() {
  if (checkIfEmpty(password)) return
  if (!meetLength(password, 6, 25)) return

  if (!containsCharacters(password, 1)) return

  return true
}

// Utility functions

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

function setValid(field) {
  field.className = 'valid'
  field.nextElementSibling.innerHTML = ''
  // field.nextElementSibling.style.color = green
}

function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field)
    return true
  } else {
    setInvalid(field, `${field.name} must contain only letters`)
    return false
  }
}

function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length <= maxLength) {
    setValid(field)
    return true
  } else if (field.value.length < minLength) {
    setInvalid(
      field,
      `${field.name} must be at least ${minLength} characters long`
    )
    return false
  } else {
    setInvalid(field, `${field.name} must shorter than ${maxLength} characters`)
    return false
  }
}
