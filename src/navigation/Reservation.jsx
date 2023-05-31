import { Text, View } from 'react-native'

import React from 'react'
import ReservationDay from '../Screens/ReservationDay'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Reservation = () => {

    const Stack = createNativeStackNavigator()
    
  return (
    <Stack.Navigator>
        <Stack.Screen name='ReservationDay' component={ReservationDay}/>
    </Stack.Navigator>
  )
}

export default Reservation