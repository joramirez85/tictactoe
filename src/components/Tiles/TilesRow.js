import React from 'react'
import {
  View
} from 'react-native'
import { observer } from 'mobx-react'

import TileItem from './TileItem'
import styles from './styles'

const TilesRow = (props) => {
  const {
    styleItemLeft,
    styleItemCenter,
    styleItemRight
  } = props.styles

  return (
    <View style={styles.containerTiles}>
      <TileItem
        row={props.row}
        col={0}
        store={props.store}
        styles={styleItemLeft}
      />
      <TileItem
        row={props.row}
        col={1}
        store={props.store}
        styles={styleItemCenter}
      />
      <TileItem
        row={props.row}
        col={2}
        store={props.store}
        styles={styleItemRight}
      />
    </View>
  )
}

export default observer(TilesRow)
