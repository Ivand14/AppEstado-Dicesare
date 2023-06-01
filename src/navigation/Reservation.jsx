import { Text, View } from 'react-native'

import React from 'react'
import ReservationDay from '../Screens/ReservationDay'
import color from '../../src/constant/color.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Reservation = () => {

    const Stack = createNativeStackNavigator()
    
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:color.terciary
      },
      headerTitleStyle:{
        color:color.colorText,
      },
      headerTitleAlign:'center'
    }}>
        <Stack.Screen name='RESERVAR' component={ReservationDay}/>
    </Stack.Navigator>
  )
}

export default Reservation