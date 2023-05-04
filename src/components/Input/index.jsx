import { TextInput, View } from 'react-native'

import React from 'react'
import styles from './styles'

const Input = ({newStyle,...restProps}) => {
  return (
    <TextInput style={{...styles.Input,...newStyle}} {...restProps}></TextInput>
  )
}

export default Input