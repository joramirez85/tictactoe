import {
  isWinner,
  minimax,
  getAvailableMoves
} from '../../src/utils/ai'

describe('utils methods suite', () => {
  describe('isWinner method', () => {
    let gameState
    beforeEach(() => {
      gameState = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    })

    it('Player 1 is winner', () => {
      gameState = [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
      ]
      const result = isWinner(gameState)
      expect(result).toBe(1)
    })

    it('Player 2 is winner', () => {
      gameState = [
        [0, 0, 0],
        [-1, -1, -1],
        [0, 0, 0]
      ]
      const result = isWinner(gameState)
      expect(result).toBe(-1)
    })
  })

  describe('minimax method', () => {
    let gameState
    beforeEach(() => {
      gameState = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    })

    it('get best move', () => {
      const result = minimax(gameState, -1, 2)
      expect(result).toEqual(
        expect.objectContaining({
          id: expect.any(Array),
          evaluation: expect.any(Number)
        })
      )
    })
  })

  describe('getAvailableMoves method', () => {
    let gameState
    beforeEach(() => {
      gameState = [
        [1, 0, 1],
        [1, 1, 1],
        [0, 1, 1]
      ]
    })
    it('moves', () => {
      const expectedResult = [[0, 1], [2, 0]]
      const result = getAvailableMoves(gameState)
      expect(expectedResult).toEqual(result)
    })
  })
})
