import { StyleSheet } from 'react-native'

import CreateWod from '../Screens/CreateWod'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import color from '../constant/color'

const Wod = () => {
    
    const Stack=createNativeStackNavigator()
    
  return (
    <Stack.Navigator screenOptions={{
      title:'WORK OF DAY',
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:color.terciary
      },
      headerTitleStyle:{
        color:color.colorText
      }
    }}>
        <Stack.Screen name='CreateWod' component={CreateWod}/>
    </Stack.Navigator>
  )
}

export default Wod

const styles = StyleSheet.create({
  
})