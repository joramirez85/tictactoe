import React, { memo } from 'react'
import { View, Image } from 'react-native'
import styles from './style'

const InfoImg = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../../assets/img/info.png')} />
    </View>
  )
}

export default memo(InfoImg)
