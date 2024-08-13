export const functions = () => {
  const squares = document.querySelectorAll('.square')
  let turn = 'X'
  let gameOver = false

  squares.forEach((square) => {
    square.innerHTML = ''
    square.addEventListener('click', () => {
      if (!gameOver && !square.innerHTML && turn === 'X') {
        square.innerHTML = turn
        if (checkGameStatus()) return
        turn = 'O'
        document.querySelector('.focus').style.left = '90px'
        setTimeout(machineMove, 500)
      }
    })
  })

  const checkGameStatus = () => {
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

    for (const [a, b, c] of winConditions) {
      if (
        squares[a].innerHTML &&
        squares[a].innerHTML === squares[b].innerHTML &&
        squares[a].innerHTML === squares[c].innerHTML
      ) {
        gameOver = true
        document.querySelector('#resultado').textContent = `Ha ganado ${turn}`
        document.querySelector('.play-again').style.display = 'inline'
        squares[a].style.backgroundColor =
          squares[b].style.backgroundColor =
          squares[c].style.backgroundColor =
            'purple'
        updateScore(turn)
        return true
      }
    }

    if ([...squares].every((square) => square.innerHTML)) {
      gameOver = true
      document.querySelector('#resultado').textContent = 'Empate'
      document.querySelector('.play-again').style.display = 'inline'
      return true
    }

    return false
  }

  const updateScore = (winner) => {
    const key = winner === 'X' ? 'xWins' : 'oWins'
    let wins = parseInt(localStorage.getItem(key)) || 0
    wins += 1
    localStorage.setItem(key, wins)
    document.querySelector('.user-info').innerHTML = `
      <p>Usuario: ${localStorage.getItem('username') || 'Invitado'}</p>
      <p>Victorias de X: ${localStorage.getItem('xWins') || 0}</p>
      <p>Victorias de O: ${localStorage.getItem('oWins') || 0}</p>
    `
  }

  const machineMove = () => {
    const emptySquares = [...squares].filter((square) => !square.innerHTML)
    if (emptySquares.length) {
      const randomSquare =
        emptySquares[Math.floor(Math.random() * emptySquares.length)]
      randomSquare.innerHTML = 'O'
      if (!checkGameStatus()) {
        turn = 'X'
        document.querySelector('.focus').style.left = '0px'
      }
    }
  }

  document.querySelector('.play-again').addEventListener('click', () => {
    gameOver = false
    turn = 'X'
    document.querySelector('.focus').style.left = '0px'
    document.querySelector('#resultado').textContent = ''
    document.querySelector('.play-again').style.display = 'none'
    squares.forEach((square) => {
      square.innerHTML = ''
      square.style.removeProperty('background-color')
    })
  })
}
