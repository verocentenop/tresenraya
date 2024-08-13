import './Buttons.css'

export const printButtons = () => {
  const main = document.querySelector('.main')
  const finalButtons = document.createElement('section')
  finalButtons.className = 'final-buttons'
  const h3 = document.createElement('h3')
  h3.id = 'resultado'
  const playAgain = document.createElement('button')
  playAgain.textContent = 'Jugar otra vez'
  playAgain.className = 'play-again'
  const menu = document.createElement('button')
  menu.textContent = 'Inicio'

  finalButtons.append(h3, playAgain, menu)
  main.append(finalButtons)
}
