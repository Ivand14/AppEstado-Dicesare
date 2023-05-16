import { ImageBackground, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

import Boton from '../../components/Buttons'
import Card from '../../components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/Input'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import styles from './styles'

const Registrarse = ({navigation  }) => {

  const image=require('../../assets/image/fondoRegistrar.jpg')
  
  return (
    
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    
      <LinearGradient colors={['#787A91','#000000']} style={styles.Gradient} start={{ x: 1, y: .7 } }
          end={{ x: .8, y: .9 }} stops={[0.5, 1]} >
          
        <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage} opacity={0.4} backgroundColor='' >
        
          <KeyboardAvoidingView style={styles.container}  behavior='height' keyboardVerticalOffset={20} >
              
              <ScrollView contentContainerStyle={styles.containerScroll} >
              <Text style={styles.Titulo}>REGISTRATE Y CONTINUA CON TU PLAN DE ENTRENAMIENTO</Text>
              
              <Card otherStyles={styles.Card}>
                  <View style={styles.containerIconInput} >
                    <Icon name="user" size={30} color="#fff" style={styles.Icon} />
                    <Input placeholder='Nombre Completo'  newStyle={styles.input}  />
                  </View>

                  <View style={styles.containerIconInput} >
                    <Icon name="envelope-o" size={30} color="#fff" style={styles.Icon} />
                    <Input placeholder='Email' autoComplete='email' newStyle={styles.input}  />
                  </View>

                  <View style={styles.containerIconInput} >
                    <Icon name="lock" size={30} color="#fff" style={styles.Icon} />
                    <Input placeholder='Contraseña' newStyle={styles.input} secureTextEntry={true}  />
                  </View>

                  <View style={styles.containerIconInput} >
                    <Icon name="lock" size={30} color="#fff" style={styles.Icon} />
                    <Input placeholder='Confirmar Contraeña' newStyle={styles.input} secureTextEntry={true}  />
                  </View>
                  <Boton newStyles={styles.Boton} onPress={()=>navigation.navigate('IniciarSesion')}>
                    REGISTRARSE
                  </Boton>
                  
                  <Text style={styles.Text}>Ya tenes una cuenta? <Text style={styles.Login} onPress={() => navigation.navigate('IniciarSesion')}>LogIn</Text></Text>
                </Card>
              </ScrollView>
              
          </KeyboardAvoidingView>
          
        </ImageBackground>
        
      </LinearGradient>
      
    </TouchableWithoutFeedback>
    
  )
}

export default Registrarse