import { Button, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
import styles from './styles'

const WodList = ({item,onDelete}) => {

  return (
    <View  style={styles.container}>
      <View style={styles.Exercises}>
        <Text style={styles.Title}>{item.Tipo}</Text>
          <View key={item.id} style={styles.containerExercise}>
            <Text style={styles.Text}>{item.Time}</Text>
            <Text style={styles.Text}>{item.Weight}</Text>
            <Text style={styles.Text}>{item.Reps}</Text>
            <Text style={styles.Text}>{item.Ejercicio1}</Text>
            <Text style={styles.Text}>{item.Ejercicio2}</Text>
            <Text style={styles.Text}>{item.Ejercicio3}</Text>
            <Text style={styles.Text}>{item.Ejercicio4}</Text>
            <Text style={styles.Text}>{item.Ejercicio5}</Text>
            <Button title='Borrar' onPress={()=>onDelete(item.id)}/>
          </View>
      </View>
    </View>
  )
}

export default WodList