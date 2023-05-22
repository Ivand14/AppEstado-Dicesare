import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'

import Icon  from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const TrainingDetails = ({route}) => {

    const training= route.params.Exercise
    
  return (
    <ScrollView style={styles.Container}>
      <Image
        source={{uri:training.image}}
        style={styles.image}
      />
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80'}} style={styles.ContainerDescriptions}>
        <View style={styles.descriptions}>
            <Text style={styles.Text}>{training.Description}</Text>
            <View style={styles.iconText}>
              <Icon name='access-time' size={20}/>
              <Text style={styles.Text}>{training.Time}</Text>
            </View>
            <View style={styles.iconText}>
              <Icon name='fitness-center' size={20}/>
              <Text style={styles.Text}>{training.Weight}</Text>       
            </View>
            <View style={styles.iconText}>
              {training.Reps ? (<View style={styles.iconText}>
                <Icon name='autorenew' size={20} />
                <Text style={styles.Text}>{training.Reps}</Text>
              </View>):null}    
            </View>
            <Text style={styles.Text}>{training.Ejercicio1}</Text>
            <Text style={styles.Text}>{training.Ejercicio2}</Text>
            <Text style={styles.Text}>{training.Ejercicio3}</Text>
            <Text style={styles.Text}>{training.Ejercicio4}</Text>
            <Text style={styles.Text}>{training.Ejercicio5}</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default TrainingDetails

