import './Header.css'

export const printHeader = () => {
  const appContainer = document.querySelector('#app')
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  const texto = document.createElement('p')
  h1.textContent = 'Tres en raya'
  texto.textContent =
    'Gana a tu oponente con astucia consiguiendo hacer 3 en raya antes que él, ¿podrás hacerlo? '

  header.append(h1, texto)
  appContainer.append(header)
}
