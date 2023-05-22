import { StyleSheet, Text, View } from 'react-native'

import CreateWod from '../Screens/CreateWod'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Wod = () => {
    
    const Stack=createNativeStackNavigator()
    
  return (
    <Stack.Navigator>
        <Stack.Screen name='CreateWod' component={CreateWod}/>
    </Stack.Navigator>
  )
}

export default Wod

const styles = StyleSheet.create({
  
})