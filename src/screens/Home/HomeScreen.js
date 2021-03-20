import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'
import {
  inject,
  observer
} from 'mobx-react'

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

class Home extends Component {
  constructor(props) {
    super(props)
    this.props.store.initGame()
  }

  componentDidMount() {
    this.props.store.initGame()
  }

  render() {
    return (
      <View style={styles.container}>
        <TilesRow
          row={0}
          store={this.props.store}
          styles={stylesOneRow}
        />
        <TilesRow
          row={1}
          store={this.props.store}
          styles={stylesTwoRow}
        />
        <TilesRow
          row={2}
          store={this.props.store}
          styles={stylesThreeRow}
        />
      </View>
    )
  }
}

export default inject('store')(observer(Home))
