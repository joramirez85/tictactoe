import {
  observable,
  action
} from 'mobx'

class GameStore {
  @observable gameState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  @observable currentPlayer = 1

  @action setGameState = (gameState) => {
    this.gameState = gameState
  }

  @action setCurrentPlayer = (currentPlayer) => {
    this.currentPlayer = currentPlayer
  }

  @action initGame = () => {
    console.log('*** === initGame')
    const gameState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    this.setGameState(gameState)
  }
}

export default new GameStore()
