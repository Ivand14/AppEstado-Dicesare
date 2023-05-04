import { ImageBackground, Text, View } from 'react-native'

import Boton from '../../components/Buttons'
import Card from '../../components/Card'
import Input from '../../components/Input'
import React from 'react'
import styles from './styles'

const Registrarse = () => {

  const image=require('../../assets/fondoRegistrar.jpg')
  
  return (
    
      <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} >
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
    
  )
}

export default Registrarse