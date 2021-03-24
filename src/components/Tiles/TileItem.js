import React from 'react'
import {
  View,
  TouchableOpacity,
  Alert
} from 'react-native'
import { observer } from 'mobx-react'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

import styles from './styles'
import {
  minimax,
  isWinner
} from '../../utils/ai'

const renderIcon = (row, col, store) => {
  const value = store.gameState[row][col]
  switch (value) {
    case 1:
      return (
        <Icon
          name='close'
          style={styles.tileX}
        />
      )
    case -1:
      return (
        <Icon
          name='circle-outline'
          style={styles.tileO}
        />
      )
    default:
      return <View />
  }
}

const setMove = (row, col, store) => {
  const currentValue = store.gameState[row][col]

  if (currentValue !== 0) {
    return
  }

  const gameState = store.gameState.slice()
  gameState[row][col] = store.currentPlayer
  store.setGameState(gameState)

  const nextPlayer = store.currentPlayer === 1 ? -1 : 1
  store.setCurrentPlayer(nextPlayer)
}

const onTilePress = (row, col, store) => {
  const { gameState } = store
  setMove(row, col, store)

  if (isWinner(gameState) === 1) {
    Alert.alert('Player 1 is the winner')
    store.initGame()
  } else if (isWinner(gameState) === -1) {
    Alert.alert('Player 2 is the winner')
    store.initGame()
  } else {
    const bestMove = minimax(gameState, -1, 1)
    console.log('==== bestMove: ', bestMove)
    const [rowBest, colBest] = bestMove.id
    setMove(rowBest, colBest, store)
  }
}

const Tile = (props) => {
  const {
    row,
    col,
    store
  } = props

  return (
    <TouchableOpacity
      onPress={() => onTilePress(row, col, store)}
      style={[styles.tile, props.styles]}
    >
      {renderIcon(row, col, store)}
    </TouchableOpacity>
  )
}

export default observer(Tile)
