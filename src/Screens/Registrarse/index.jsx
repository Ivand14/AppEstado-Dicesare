import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native'

import Boton from '../../components/Buttons'
import Card from '../../components/Card'
import Input from '../../components/Input'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import styles from './styles'

const Registrarse = () => {

  const image=require('../../assets/fondoRegistrar.jpg')
  
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <LinearGradient colors={['#787A91','#000000']} style={styles.Gradient} start={{ x: 1, y: .7 } }
          end={{ x: .8, y: .9 }} stops={[0.5, 1]} >
        <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} opacity={0.4} backgroundColor='' >
          <View style={styles.container}>
            <Text style={styles.Titulo}>REGISTRATE Y CONTINUA CON TU PLAN DE ENTRENAMIENTO</Text>
            <Card otherStyles={styles.Card}>
              <Input placeholder='Email' autoComplete='email' />
              <Input placeholder='Password' newStyle={styles.input} secureTextEntry={true}  />
              <Boton newStyles={styles.Boton}>
                REGISTRARSE
              </Boton>
              <Text style={styles.Text}>Ya tenes una cuenta? LogIn</Text>
            </Card>
          </View>
        </ImageBackground>
      </LinearGradient>
    </TouchableWithoutFeedback>
    
  )
}

export default Registrarse