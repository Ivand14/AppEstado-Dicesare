import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import styles from './styles'

const CardCategory = ({item,onSelected}) => {
  return (
    <View style={styles.containerCategory}>

      <TouchableOpacity onPress={()=>onSelected(item)}>
              <View style={styles.containerBackground}>
                <ImageBackground  source={{uri:item.Img}} style={styles.imgBackground} borderRadius={10}>
                    <View style={styles.ContainerTextBackground}>
                      <Text style={styles.textBackground}>
                        {item.Title}
                      </Text>
                    </View>
                </ImageBackground>
              </View>
      </TouchableOpacity>
      
    </View>
  )
}



export default CardCategory