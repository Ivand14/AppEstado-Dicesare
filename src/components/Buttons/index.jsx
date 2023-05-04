import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const Boton = ({children,newStyles,onPress}) => {
  return (
    <TouchableOpacity style={{...styles.Button,...newStyles}} onPress={onPress} ><Text style={{...styles.txtButton,...newStyles}} >{children}</Text></TouchableOpacity>
  )
}

export default Boton