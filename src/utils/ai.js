const MAX_DEPTH = 3

const minimax = (gameData, PLAYER, depth) => {
  if (isWinner(gameData) === 1) {
    return { evaluation: +10 }
  } else if (isWinner(gameData) === -1) {
    return { evaluation: -10 }
  } else if (isTie(gameData) || depth === MAX_DEPTH) {
    return { evaluation: 0 }
  }

  const availableMoves = getAvailableMoves(gameData)

  const moves = []

  for (let i = 0; i < availableMoves.length; i++) {
    const id = availableMoves[i]
    const [row, col] = id

    const backup = gameData[row][col]

    gameData[row][col] = PLAYER

    const move = {}
    move.id = id

    if (PLAYER === -1) {
      move.evaluation = minimax(gameData, 1, depth + 1).evaluation
    } else {
      move.evaluation = minimax(gameData, -1, depth + 1).evaluation
    }

    gameData[row][col] = backup

    moves.push(move)
  }

  let bestMove

  if (PLAYER === -1) {
    let bestEvaluation = -Infinity
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].evaluation > bestEvaluation) {
        bestEvaluation = moves[i].evaluation
        bestMove = moves[i]
      }
    }
  } else {
    let bestEvaluation = +Infinity
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].evaluation < bestEvaluation) {
        bestEvaluation = moves[i].evaluation
        bestMove = moves[i]
      }
    }
  }

  return bestMove
}

const isTie = (gameState) => {
  let isBoardFill = true
  gameState.forEach(row => {
    row.forEach(cell => {
      isBoardFill = cell && isBoardFill
    })
  })

  if (isBoardFill) {
    return true
  }
  return false
}

const getAvailableMoves = (gameState) => {
  const moves = []
  gameState.forEach((row, indexRow) => {
    row.forEach((cell, indexCol) => {
      if (!cell) moves.push([indexRow, indexCol])
    })
  })

  return moves
}

const isWinner = (gameState) => {
  const NUM_TILES = 3
  let sum = 0

  for (let i = 0; i < NUM_TILES; i++) {
    sum = gameState[i][0] + gameState[i][1] + gameState[i][2]
    if (sum === 3) {
      return 1
    } else if (sum === -3) {
      return -1
    }
  }

  for (let i = 0; i < NUM_TILES; i++) {
    sum = gameState[0][i] + gameState[1][i] + gameState[2][i]
    if (sum === 3) {
      return 1
    } else if (sum === -3) {
      return -1
    }
  }

  sum = gameState[0][0] + gameState[1][1] + gameState[2][2]
  if (sum === 3) {
    return 1
  } else if (sum === -3) {
    return -1
  }

  sum = gameState[2][0] + gameState[1][1] + gameState[0][2]
  if (sum === 3) {
    return 1
  } else if (sum === -3) {
    return -1
  }

  return 0
}

export {
  minimax,
  isWinner,
  isTie,
  getAvailableMoves
}
