import './Table.css'
import { tableArray } from './TableArray'

export const printTable = () => {
  const appContainer = document.querySelector('#app')
  const main = document.createElement('main')
  main.className = 'main'

  const turns = document.createElement('section')
  turns.className = 'turns-box'
  const turnsTitle = document.createElement('h2')
  turnsTitle.textContent = 'Turno:'
  const x = document.createElement('div')
  x.classList = 'turn align'
  x.textContent = 'X'
  const o = document.createElement('div')
  o.classList = 'turn align'
  o.textContent = 'O'
  const focus = document.createElement('div')
  focus.className = 'focus'

  const workArea = document.createElement('section')
  workArea.className = 'workarea'

  for (const element of tableArray) {
    const square = document.createElement('div')
    square.textContent = element.name
    square.classList = 'square align'
    workArea.append(square)
  }
  turns.append(turnsTitle, x, o, focus)
  main.append(turns, workArea)
  appContainer.append(main)
}
