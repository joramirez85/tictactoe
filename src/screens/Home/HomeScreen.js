import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { observer, inject } from 'mobx-react'

import TilesRow from '../../components/Tiles/TilesRow'
import styles from './styles'
import stylesTile from '../../components/Tiles/styles'

const stylesOneRow = {
  styleItemLeft: stylesTile.borderLeftTop,
  styleItemCenter: stylesTile.borderTop,
  styleItemRight: stylesTile.borderRightTop
}

const stylesTwoRow = {
  styleItemLeft: stylesTile.borderLeft,
  styleItemCenter: {},
  styleItemRight: stylesTile.borderRightWidth
}

const stylesThreeRow = {
  styleItemLeft: stylesTile.borderBottomWidth,
  styleItemCenter: stylesTile.borderBottomLeftWidth,
  styleItemRight: stylesTile.borderBottomRightWidth
}

@inject('gameStore')
@observer
class Home extends Component {

  constructor(props) {
    super(props)
    this.props.gameStore.initGame()
  }

  componentDidMount() {
    this.props.gameStore.initGame()
  }

  render() {
    return (
      <View style={styles.container}>
        <TilesRow
          row={0}
          store={this.props.gameStore}
          styles={stylesOneRow}
        />
        <TilesRow
          row={1}
          store={this.props.gameStore}
          styles={stylesTwoRow}
        />
        <TilesRow
          row={2}
          store={this.props.gameStore}
          styles={stylesThreeRow}
        />
      </View>
    )
  }
}

export default Home
