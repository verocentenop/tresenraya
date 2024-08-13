import './Form.css'

export const printRegisterForm = () => {
  const appContainer = document.querySelector('#app')

  const userInfoContainer = document.createElement('div')
  userInfoContainer.className = 'user-info'
  appContainer.prepend(userInfoContainer)

  const displayUserInfo = () => {
    const username = localStorage.getItem('username') || 'Invitado'
    const xWins = localStorage.getItem('xWins') || 0
    const oWins = localStorage.getItem('oWins') || 0

    userInfoContainer.innerHTML = `
      <p class = "info">Usuario: ${username}</p>
      <p class = "info">Victorias de X: ${xWins}</p>
      <p class = "info">Victorias de O: ${oWins}</p>
    `
  }
  displayUserInfo()

  const formContainer = document.createElement('div')
  formContainer.className = 'form-container'

  const form = document.createElement('form')
  form.className = 'register-form'

  const label = document.createElement('label')
  label.textContent = 'Introduce tu nombre:'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'username'
  input.required = true

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.textContent = 'Registrar'

  form.append(label, input, submitButton)
  formContainer.append(form)
  appContainer.append(formContainer)

  const beforeFooter = document.createElement('div')
  beforeFooter.className = 'before-footer'
  beforeFooter.append(userInfoContainer)

  const footer = document.querySelector('.footer')
  if (footer) {
    appContainer.insertBefore(beforeFooter, footer)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = input.value.trim()
    if (username) {
      localStorage.setItem('username', username)
      if (!localStorage.getItem('xWins')) {
        localStorage.setItem('xWins', 0)
      }
      if (!localStorage.getItem('oWins')) {
        localStorage.setItem('oWins', 0)
      }
      displayUserInfo()
      formContainer.remove()
    }
  })
}
