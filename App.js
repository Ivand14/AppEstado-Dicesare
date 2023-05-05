import React, { useState } from 'react'

import IniciarSesion from './src/Screens/IniciarSesion'
import Login from './src/Screens/Login'
import Registrarse from './src/Screens/Registrarse'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-animatable'
import { useFonts } from 'expo-font'

//npx expo install expo-font


const App = () => {

    const [userValidationLogIn,setUserValidationSingIn]=useState(false)

    const [fonstLoaded]=useFonts({
        Primario:require('./src/assets/fonts/Primario/SignikaNegative-VariableFont_wght.ttf'),
        Secundario:require('./src/assets/fonts/Secundario/Ysabeau-VariableFont_wght.ttf'),
    })

    if(!fonstLoaded){
        return null;
    }

    const onHandleValidationSingIn = user => {
        setUserValidationSingIn(user)}

    let contentSingIn= <Login validation={onHandleValidationSingIn}/>


    if (userValidationLogIn) {
        contentSingIn=<Registrarse/>
    }

    
    return (
        <View style={styles.container}>
            {contentSingIn}
        </View>
        
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
