import React from 'react'
import {
  View,
  TouchableOpacity,
  Alert
} from 'react-native'
import { observer } from 'mobx-react'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

import styles from './styles'

const renderIcon = (row, col, store) => {
  console.log('***** renderIcon')
  const value = store.gameState[row][col]
  switch(value){
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

const whoIsWinner = (store) => {
  const NUM_TILES = 3
  let sum = 0
  const gameState = store.gameState

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

const onTilePress = (row, col, store) => {
  const currentValue = store.gameState[row][col]

  if (currentValue !== 0) {
    return
  }

  const gameState = store.gameState.slice()
  gameState[row][col] = store.currentPlayer
  store.setGameState(gameState)

  const nextPlayer = store.currentPlayer === 1 ? -1 : 1
  store.setCurrentPlayer(nextPlayer)

  const winner = whoIsWinner(store)
  if (winner === 1) {
    Alert.alert('1 es ganador')
    store.initGame()
  } else if (winner === -1) {
    Alert.alert('2 es ganador')
    store.initGame()
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
