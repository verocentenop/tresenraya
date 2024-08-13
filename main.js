import './style.css'
import { printHeader } from './src/Header/Header'
import { printFooter } from './src/Footer/Footer'
import { printTable } from './src/Table/Table'
import { printButtons } from './src/Buttons/Buttons'
import { functions } from './src/Function/Function'
import { printRegisterForm } from './src/Form/Form'

const init = () => {
  printHeader()
  printTable()
  printButtons()
  functions()
  printFooter()
  printRegisterForm()
}
init()

// const line0 = square[conditions[i][0]].innerHTML
// const line1 = square[conditions[i][1]].innerHTML
// const line2 = square[conditions[i][2]].innerHTML
// const line3 = square[conditions[i][3]].innerHTML
// const line4 = square[conditions[i][4]].innerHTML
// const line5 = square[conditions[i][5]].innerHTML
// const line6 = square[conditions[i][6]].innerHTML
// const line7 = square[conditions[i][7]].innerHTML
// const line8 = square[conditions[i][8]].innerHTML
