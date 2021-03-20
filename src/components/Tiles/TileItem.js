import React from 'react'
import {
  View
} from 'react-native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

import styles from './styles'

const renderIcon = (value) => {

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

const Tile = (props) => {
  const {
    row,
    col
  } = props
  console.log('****** props: ', props)
  const value = props.store.gameState[row][col]
  return (
    <View style={[styles.tile, props.styles]}>
      {renderIcon(value)}
    </View>
  )
}

export default Tile
