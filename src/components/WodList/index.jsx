import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const WodList = ({item}) => {
  console.log(item)
  return (
    <View  style={styles.container}>
      <View style={styles.Exercises}>
        <Text style={styles.Title}>WARMUPS</Text>
        {item.Warmups.map((warmup)=>(
          <View key={warmup.id} style={styles.containerExercise}>
            <Text style={styles.Text}>{warmup.Title}</Text>
            <Text style={styles.Text}>{warmup.Time}</Text>
            <Text style={styles.Text}>{warmup.Weight}</Text>
            <Text style={styles.Text}>{warmup.Reps}</Text>
            <Text style={styles.Text}>{warmup.Ejercicio1}</Text>
            <Text style={styles.Text}>{warmup.Ejercicio2}</Text>
            <Text style={styles.Text}>{warmup.Ejercicio3}</Text>
            <Text style={styles.Text}>{warmup.Ejercicio4}</Text>
            <Text style={styles.Text}>{warmup.Ejercicio5}</Text>
          </View>
        ))}
      </View>
      <View style={styles.Exercises}>
        <Text style={styles.Title}>WEIGHTLIFTING</Text>
        {item.Weightlifting.map((weight)=>(
          <View style={styles.containerExercise} key={weight.id}>
            <Text style={styles.Text}>{weight.Title}</Text>
            <Text style={styles.Text}>{weight.Time}</Text>
            <Text style={styles.Text}>{weight.Weight}</Text>
          </View>
        ))}
      </View>
      <View style={styles.Exercises}>
        <Text style={styles.Title}>WORK OF DAY</Text>
        {item.Wod.map((work)=>(
          <View style={styles.containerExercise} key={work.id}>
            <Text style={styles.Text}>{work.Title}</Text>
            <Text style={styles.Text}>{work.Time}</Text>
            <Text style={styles.Text}>{work.Description}</Text>
            <Text style={styles.Text}>{work.Ejercicio1}</Text>
            <Text style={styles.Text}>{work.Ejercicio2}</Text>
            <Text style={styles.Text}>{work.Ejercicio3}</Text>
            <Text style={styles.Text}>{work.Ejercicio4}</Text>
            <Text style={styles.Text}>{work.Ejercicio5}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default WodList