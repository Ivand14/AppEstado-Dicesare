import React, { Children } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const Card = ({children,otherStyles}) => {
  return (
    <View style={{...styles.cardBody,...otherStyles}}>{children}</View>
  )
}

export default Card