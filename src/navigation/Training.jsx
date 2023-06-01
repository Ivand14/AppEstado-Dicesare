import Home from '../Screens/PantallaPrincipal'
import { Image } from 'react-native'
import IniciarSesion from '../Screens/IniciarSesion'
import Login from '../Screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Registrarse from '../Screens/Registrarse'
import RmTracker from '../Screens/RmTracker'
import Runnign from '../Screens/Running'
import TrainingDetails from '../Screens/TrainingDetails'
import TrainingTypes from '../Screens/TrainingTypes'
import color from '../constant/color'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Training = () => {

    const Stack= createNativeStackNavigator()

    const LogoTitle=()=>(
        <Image
            source={require('../../src/assets/pngwing.com.png')}
            style={{width:60,height:60,margin:5}}
        />
    )



    return (

            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{
                    headerStyle:{
                        backgroundColor:color.terciary,
                    },
                    headerTintColor:'#fff',
                    headerTitle:(props)=> <LogoTitle {...props}/>,
                    headerTitleAlign: 'center',
                }}/>
                <Stack.Screen name='RmTracker' component={RmTracker} options={{
                    headerShown:false
                }}/>

                <Stack.Screen name='Running' component={Runnign} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name='TrainingTypes' component={TrainingTypes} options={{
                    headerStyle:{
                        backgroundColor:color.terciary,
                    },
                    headerTintColor:'#fff',
                    headerTitle:(props)=> <LogoTitle {...props}/>,
                    headerTitleAlign: 'center',
                }}/>
                <Stack.Screen name='TrainingDetails' component={TrainingDetails} options={{
                        headerStyle:{
                        backgroundColor:color.terciary,
                    },
                    headerTintColor:'#fff',
                    headerTitle:(props)=> <LogoTitle {...props}/>,
                    headerTitleAlign: 'center',
                }}/>
            </Stack.Navigator>

    )
}

export default Training