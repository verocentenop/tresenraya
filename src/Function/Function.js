export const functions = () => {
  const squares = document.querySelectorAll('.square')
  let turn = 'X'
  let gameOver = false

  squares.forEach((square) => {
    square.innerHTML = ''
    square.addEventListener('click', () => {
      if (!gameOver && square.innerHTML === '') {
        square.innerHTML = turn
        checkWinner()
        checkDraw()
        changeTurn()
      }
    })
  })

  const changeTurn = () => {
    if (turn === 'X') {
      turn = 'O'
      document.querySelector('.focus').style.left = '90px'
    } else {
      turn = 'X'
      document.querySelector('.focus').style.left = '0px'
    }
  }

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    winConditions.forEach((condition) => {
      const [a, b, c] = condition
      if (
        squares[a].innerHTML &&
        squares[a].innerHTML === squares[b].innerHTML &&
        squares[a].innerHTML === squares[c].innerHTML
      ) {
        gameOver = true
        document.querySelector('#resultado').innerHTML = `Ha ganado ${turn}`
        document.querySelector('.play-again').style.display = 'inline'

        condition.forEach((index) => {
          squares[index].style.backgroundColor = 'purple'
        })

        updateScore(turn) // Actualiza la puntuación de X o O
      }
    })
  }

  const updateScore = (winner) => {
    const key = winner === 'X' ? 'xWins' : 'oWins'
    let wins = parseInt(localStorage.getItem(key)) || 0
    wins += 1
    localStorage.setItem(key, wins)

    const xWins = localStorage.getItem('xWins') || 0
    const oWins = localStorage.getItem('oWins') || 0
    document.querySelector('.user-info').innerHTML = `
      <p>Usuario: ${localStorage.getItem('username') || 'Invitado'}</p>
      <p>Victorias de X: ${xWins}</p>
      <p>Victorias de O: ${oWins}</p>
    `
  }
  const checkDraw = () => {
    if (!gameOver) {
      let isDraw = true
      squares.forEach((square) => {
        if (square.innerHTML === '') isDraw = false
      })

      if (isDraw) {
        gameOver = true
        document.querySelector('#resultado').innerHTML = 'Empate'
        document.querySelector('.play-again').style.display = 'inline'
      }
    }
  }

  document.querySelector('.play-again').addEventListener('click', () => {
    gameOver = false
    turn = 'X'
    document.querySelector('.focus').style.left = '0px'
    document.querySelector('#resultado').innerHTML = ''
    document.querySelector('.play-again').style.display = 'none'

    squares.forEach((square) => {
      square.innerHTML = ''
      square.style.removeProperty('background-color')
    })
  })
}
