import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  tile: {
    borderWidth: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileX: {
    color: Colors.softRed,
    fontSize: 60
  },
  tileO: {
    color: Colors.green,
    fontSize: 60
  },
  containerTiles: {
    flexDirection: 'row'
  },
  borderLeftTop: {
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  borderTop: {
    borderTopWidth: 0
  },
  borderRightTop: {
    borderRightWidth: 0,
    borderTopWidth: 0
  },
  borderLeft: {
    borderLeftWidth: 0
  },
  borderRightWidth: {
    borderRightWidth: 0
  },
  borderBottomWidth: {
    borderBottomWidth: 0,
    borderLeftWidth: 0
  },
  borderBottomLeftWidth: {
    borderBottomWidth: 0
  },
  borderBottomRightWidth: {
    borderBottomWidth: 0,
    borderRightWidth: 0
  }
})

export default styles
