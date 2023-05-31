import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Boton from '../../components/Buttons'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { addWod } from '../../store/actions/createWodAction.actions'
import styles from './styles'

const TrainingDetails = () => {

    const dispatch=useDispatch()
    const training= useSelector(state=>state.categoryTraining.selected)
    
    const onHandleAdd=()=>{
      dispatch(addWod(training))
    }
    
  return (
    
      <View  style={styles.ContainerDescriptions}>
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
            <Boton newStyles={styles.button} onPress={onHandleAdd} >
              <Text style={styles.TextBoton}>ADD WOD</Text>
            </Boton>
        </View>
      </View>
  )
}

export default TrainingDetails

