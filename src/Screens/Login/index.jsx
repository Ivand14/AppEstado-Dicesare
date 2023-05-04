import * as Animatable from 'react-native-animatable';

import React, { useState } from 'react'
import { Text, View } from 'react-native'

import Button from '../../components/Buttons';
import { Video } from 'expo-av'
import styles from './styles';

const Login = ({validation}) => {

    const [user,setUser]=useState(false)

    const imgUrl= require('../../assets/pngegg.png')

    const videoUrl= require('../../assets/Studio_Project.mp4')
    

    onHandleValidationSingIn=()=>{
        setUser(true)
        validation(true)
    }
    
  return (
    <View style={styles.container}>
        <Video
        source={videoUrl}
        style={styles.video}
        resizeMode='cover'
        shouldPlay={true}
        isLooping={true}
        isMuted={true}
        /> 

        <View style={styles.containerTextVideo}>
            <Animatable.Image  animation="slideInDown" iterationCount={5} direction="alternate" source={imgUrl} style={styles.logo} />

      
            <Text style={styles.textVideo}>Crossfit Warrior</Text>

            
            
            <Text style={styles.subTextVideo}>Planea tu entrenamiento al instante en la App</Text> 

            <View style={styles.buttonsGroup}>
                <Button newStyle={styles.containerButtons} onPress={()=>onHandleValidationSingIn(user)} >
                    REGISTRARSE
                </Button>  
            </View>
        </View>
    </View>
  )
}

export default Login

