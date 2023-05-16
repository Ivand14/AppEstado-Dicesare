import Home from '../Screens/PantallaPrincipal'
import IniciarSesion from '../Screens/IniciarSesion'
import Login from '../Screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Registrarse from '../Screens/Registrarse'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RmTracker from '../Screens/RmTracker'

const Training = () => {

    const Stack= createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='IniciarSesion' component={IniciarSesion}/>
                <Stack.Screen name='Registrarse' component={Registrarse}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='RmTracker' component={RmTracker}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Training