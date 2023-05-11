import React, { useState } from 'react'

import { StyleSheet } from 'react-native'
import Training from './src/navigation/Training'
import { View } from 'react-native-animatable'
import { useFonts } from 'expo-font'

//npx expo install expo-font


const App = () => {


    const [fonstLoaded]=useFonts({
        Primario:require('./src/assets/fonts/Primario/SignikaNegative-VariableFont_wght.ttf'),
        Secundario:require('./src/assets/fonts/Secundario/Ysabeau-VariableFont_wght.ttf'),
    })

    if(!fonstLoaded){
        return null;
    }


    
    return (
        <Training/>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
