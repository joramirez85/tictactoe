import { observable, action, makeObservable } from 'mobx'

class GameStore {
  constructor () {
    makeObservable(this)
  }

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
    const gameState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    this.setCurrentPlayer(1)
    this.setGameState(gameState)
  }
}

export default new GameStore()
